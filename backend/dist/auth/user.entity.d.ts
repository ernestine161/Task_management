import { Schema, Document } from 'mongoose';
export interface User extends Document {
    id: string;
    username: string;
    email: string;
}
export declare const UserSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    username: string;
    email: string;
}, Document<unknown, {}, import("mongoose").FlatRecord<{
    username: string;
    email: string;
}>> & import("mongoose").FlatRecord<{
    username: string;
    email: string;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
