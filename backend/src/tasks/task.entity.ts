import { Schema, Document } from 'mongoose';

export interface Task extends Document {
  id: string;
  title: string;
  description: string;
  userId: string; // or whatever user field you need
  // add other necessary fields here
}

export const TaskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  // other schema properties
});
