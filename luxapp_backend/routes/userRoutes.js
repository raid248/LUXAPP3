// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const UserModel = require("../models/userModel");

// ✅ POST /api/users/register — Create a new user
router.post("/register", async (req, res) => {
  try {
    console.log("📨 Creating user:", req.body);

    const user = await UserModel.createUser(req.body);

    console.log("✅ User created:", user);
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    console.error("❌ Error creating user:", error.message);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// ✅ GET /api/users/:id — Fetch a user by ID
router.get("/:id", async (req, res) => {
  try {
    const user = await UserModel.getUser(req.params.id);
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }
    res.json({ success: true, user });
  } catch (error) {
    console.error("❌ Error fetching user:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;

