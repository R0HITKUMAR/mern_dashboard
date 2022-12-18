import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    registeredOn: { type: String },
    role: { type: String },
    google: { type: Boolean, default: false },
    microsoft: { type: Boolean, default: false },
    github: { type: Boolean, default: false },
    img: { type: String },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
