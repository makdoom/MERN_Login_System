const router = require("express").Router();

const User = require("../model/UserModel");
const { Schemas, Validation } = require("../model/ValidationSchema");

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
      return res.status(200).json({ user: savedUser });
    } catch (error) {
      console.log(error);
    }
  }
);

// Login Route
router.post("/login", Validation.validationBody(Schemas.login), (req, res) => {
  res.send("Login ");
});

module.exports = router;
