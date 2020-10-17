const router = require("express").Router();
const JWT = require("jsonwebtoken");
const passport = require("passport");
require("../passport");

const User = require("../model/UserModel");
const { Schemas, Validation } = require("../model/ValidationSchema");
const registerValidation = Validation.validationBody(Schemas.register);
const loginValidation = Validation.validationBody(Schemas.login);
const { authLogin, authReg } = require("../middleware/auth");

// Assigning a token
const signToken = (user) => {
  return JWT.sign({ id: user.id }, process.env.JWT_SECRET);
};

// Register Route
router.post("/register", registerValidation, async (req, res) => {
  try {
    const { name, email, password } = req.value.body;

    // Check if it already exists or not
    const existsUser = await User.findOne({ email });
    if (existsUser)
      return res.status(403).json({ error: "Email is already registered " });

    // Creating a newUser
    const newUser = new User({ name, email, password });

    // Saving a user in db
    const savedUser = await newUser.save();

    // Response with JWT token
    const token = signToken(savedUser);
    return res.status(200).json({ token, user: savedUser });
  } catch (error) {
    console.log(error);
  }
});

// Login Route
router.post("/login", loginValidation, authLogin, (req, res) => {
  // Assigning a new token
  const token = signToken(req.user);
  return res.status(200).json({ token, user: req.user });
});

// Dashboard Route
router.get("/dashboard", authReg, (req, res) => {
  res.send("welcome to dashboard");
});

module.exports = router;
