const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  mongoose.Schema(
    {
      username: { type: String, required: true, unique: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      profilePic: { type: String, default: "" },
      isAdmin: { type: Boolean, default: false },
    },
    { timestamps: true }
  )
);

module.exports = User;
