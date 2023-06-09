/*

Copyright (c) 2019 - present AppSeed.us

*/
import mongoose from "mongoose";

interface UserInterface {
  username: string;
  email: string;
  password?: string;
  date?: Date;
}

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  user_role: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

interface UserDbInterface extends UserInterface, mongoose.Document {}
const User = mongoose.model<UserDbInterface>("User", UserSchema);
export default User;
