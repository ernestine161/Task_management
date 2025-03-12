import { Schema, Document } from 'mongoose';
export interface Task extends Document {
    id: string;
    title: string;
    description: string;
    userId: string;
}
export declare const TaskSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    title: string;
    description: string;
    userId?: import("mongoose").Types.ObjectId | null | undefined;
}, Document<unknown, {}, import("mongoose").FlatRecord<{
    title: string;
    description: string;
    userId?: import("mongoose").Types.ObjectId | null | undefined;
}>> & import("mongoose").FlatRecord<{
    title: string;
    description: string;
    userId?: import("mongoose").Types.ObjectId | null | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
