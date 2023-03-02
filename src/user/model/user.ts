import { Schema, model } from "mongoose";

export interface IUser {
  username?: string;
  password?: string;
  createdAt?: Date;
}
export const userSchema = new Schema<IUser>(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true, select: false },
    createdAt: { type: Date, default: new Date().toISOString() },
  },
  {
    versionKey: false,
    autoIndex: false,
    autoCreate: false,
  }
);
const User = model<IUser>("user", userSchema);

export default User;
