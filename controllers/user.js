import User from "../models/user.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

const JWT_SECRET= "nskfnskfnskdnskdn3e34u343hkdsnk"
// Register a new user
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    // Check if the user with the provided email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "Email already in use" });
    }

    // Hash the password using bcryptjs
    const hashedPassword = bcryptjs.hashSync(password, 10);

    // Create a new user instance with hashed password
    const newUser = new User({ username, email, password: hashedPassword });

    // Save the new user to the database
    await newUser.save();

    res
      .status(201)
      .json({ success: true, message: "User created successfully" });
  } catch (error) {
    console.error("Error during signup:", error);
    // Pass the error to the error handling middleware
    next(error);
  }
};

// User login
export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  // Find the user by their email address
  console.log(req.body)
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User not found"));
console.log(validUser)
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(404, "Wrong credentials"));

    // Generate JWT token upon successful login
    const token = jwt.sign({ id: validUser._id }, JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
