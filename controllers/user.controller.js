const User = require("../models/user.model.js");
const bcrypt = require("bcryptjs");

exports.register = async (req, res, next) => {
  try {
    const { email, firstName, lastName, password } = req.body;
    const hashsedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
      email,
      firstName,
      lastName,
      password: hashsedPassword,
    });
    res.status(201).json(user);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Error creating user" });
  }
};
