const router = require("express").Router();
const JWT = require("jsonwebtoken");
const passport = require("passport");
require("../passport");

const User = require("../model/UserModel");
const { Schemas, Validation } = require("../model/ValidationSchema");

// Assigning a token
const signToken = (user) => {
  return JWT.sign({ id: user.id }, process.env.JWT_SECRET);
};

// Register Route
router.post(
  "/register",
  Validation.validationBody(Schemas.register),
  async (req, res) => {
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
  }
);

// Login Route
router.post("/login", Validation.validationBody(Schemas.login), (req, res) => {
  res.send("Login ");
});

// Dashboard Route
router.get(
  "/dashboard",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.send("welcome to dashboard");
  }
);

module.exports = router;
