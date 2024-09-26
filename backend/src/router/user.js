const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const z = require("zod");
const bcrypt = require("bcryptjs");
const User = require('../models/User');


const signupBody = z.object({
    username: z.string().min(1, { message: "Username is required" }),
    email: z.string().email({ message: "Invalid email format" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
    confirmPassword: z.string().min(6, { message: "Confirm password must be at least 6 characters long" }),
}).refine(data => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
});

const JWT_SECRET = "tushar";

router.post("/signup", async (req, res) => {
    const parsed = signupBody.safeParse(req.body);

    console.log("Request Body:", req.body);

    if (!parsed.success) {
        return res.status(411).json({
            msg: "Invalid input",
            errors: parsed.error.errors, 
        });
    }

    try {
        const { email, username, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({
                msg: "Email already taken",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            username,
            email,
            password: hashedPassword,
        });

        const userId = user._id;

        const token = jwt.sign({ userId }, JWT_SECRET);

        return res.json({
            msg: "User account created successfully",
            token,
            user,
        });
    } catch (error) {
        console.error("Error details:", error);
        return res.status(500).json({ msg: "Error while creating user", error: error.message });
    }
});
const signinBody = z.object({
    username: z.string().min(1, { message: "Username is required" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
  });
  
  router.post("/signin", async (req, res) => {
    const { success, error } = signinBody.safeParse(req.body);
   console.log("request",req.body)
    if (!success) {
      return res.status(411).json({
        msg: "Invalid input",
        errors: error.errors,
      });
    }
  
    try {
      const user = await User.findOne({ username: req.body.username });
  
      if (!user) {
        return res.status(404).json({ msg: "User not found" });
      }
  
      const isMatch = await bcrypt.compare(req.body.password, user.password);
  
      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid username or password" });
      }
  
      const token = jwt.sign({ userId: user._id }, JWT_SECRET);
  
      res.status(200).json({
        msg: "Signin successful",
        token,
      });
    } catch (err) {
      console.error("Error during signin:", err.message);
      res.status(500).json({ msg: "Error during signin", error: err.message });
    }
  });
  

  const changePasswordBody = z.object({
    oldPassword: z.string().min(6),
    newPassword: z.string().min(6),
});

router.post("/change-password/:userId", async (req, res) => {
    const { success, error } = changePasswordBody.safeParse(req.body);

    if (!success) {
        return res.status(411).json({
            msg: "Invalid input",
            errors: error.errors,
        });
    }

    const user = await User.findById(req.params.userId);
    if (!user) {
        return res.status(404).json({ msg: "User not found" });
    }

    const isMatch = await bcrypt.compare(req.body.oldPassword, user.password);
    if (!isMatch) {
        return res.status(400).json({ msg: "Incorrect old password" });
    }

    user.password = await bcrypt.hash(req.body.newPassword, 10);
    await user.save();

    res.status(200).json({ msg: "Password updated successfully" });
});

module.exports = router;
