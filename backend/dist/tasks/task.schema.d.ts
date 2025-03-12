import { Document, Schema as MongooseSchema } from 'mongoose';
import { TaskStatus } from './task-status.enum';
export declare class Task extends Document {
    title: string;
    description: string;
    status: TaskStatus;
    user: MongooseSchema.Types.ObjectId;
}
export declare const TaskSchema: MongooseSchema<Task, import("mongoose").Model<Task, any, any, any, Document<unknown, any, Task> & Task & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Task, Document<unknown, {}, import("mongoose").FlatRecord<Task>> & import("mongoose").FlatRecord<Task> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
