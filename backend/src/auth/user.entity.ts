import { Schema, Document } from 'mongoose';

export interface User extends Document {
  id: string;
  username: string;
  email: string;
  // add other fields
}

export const UserSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  // other schema properties
});
