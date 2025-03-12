import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './task.schema';
import { User } from '../auth/user.schema';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task.name) private taskModel: Model<Task>,
  ) {}

  async getTasks(
    filterDto: GetTasksFilterDto,
    user: User,
  ): Promise<Task[]> {
    const { status, search } = filterDto;
    const query = this.taskModel.find({ user: user._id });
    
    if (status) {
      query.where('status').equals(status);
    }

    if (search) {
      query.or([
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
      ]);
    }

    return query.exec();
  }

  async getTaskById(id: string, user: User): Promise<Task> {
    const found = await this.taskModel.findOne({ 
      _id: id,
      user: user._id
    }).exec();

    if (!found) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }

    return found;
  }

  async createTask(
    createTaskDto: CreateTaskDto,
    user: User,
  ): Promise<Task> {
    const { title, description } = createTaskDto;

    const task = new this.taskModel({
      title,
      description,
      status: TaskStatus.OPEN,
      user: user._id,
    });

    return task.save();
  }

  async deleteTask(id: string, user: User): Promise<void> {
    const result = await this.taskModel.deleteOne({ 
      _id: id, 
      user: user._id 
    }).exec();

    if (result.deletedCount === 0) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
  }

  async updateTaskStatus(
    id: string,
    status: TaskStatus,
    user: User,
  ): Promise<Task> {
    const task = await this.getTaskById(id, user);
    
    task.status = status;
    return task.save();
  }
}