const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// User Schema
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Hashing the password
userSchema.pre("save", async function (next) {
  try {
    // Generating a salt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

// Password Validator
userSchema.methods.validPassword = async function (userPassword) {
  try {
    return await bcrypt.compare(userPassword, this.password);
  } catch (error) {
    throw new Error(error);
  }
};

// Creating a model
const User = mongoose.model("user", userSchema);

// Exporting
module.exports = User;
