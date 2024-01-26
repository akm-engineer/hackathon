import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      required: "Name is Required",
    },
    email: {
      type: String,
      unique: true,
      lowercase: true, //converts the string to lower case
      required: "Email is required",
    },
    password: {
      type: String,
      required: "Password is required",
      minlength: 6,
      maxlenght: 20,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});
const User = mongoose.model("User", userSchema);

export default User;
