import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { TaskStatus } from './task-status.enum';
import { Transform } from 'class-transformer';

@Schema()
export class Task extends Document {
  @Transform(({ value }) => value.toString())


  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  status: TaskStatus;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  user: MongooseSchema.Types.ObjectId;
}

export const TaskSchema = SchemaFactory.createForClass(Task);