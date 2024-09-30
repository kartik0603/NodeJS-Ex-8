const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
  otp: String,
  isVerified: { type: Boolean, default: false },
  canPost: { type: Boolean, default: false },
});
const User = mongoose.model("User", userSchema);
module.exports = User;



