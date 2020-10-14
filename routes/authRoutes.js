const router = require("express").Router();
const { Schemas, Validation } = require("../model/ValidationSchema");

// Register Route
router.post("/register", Validation.register(Schemas.register), (req, res) => {
  const { name, email, password } = req.value.body;
  //   res.status(200).json({ user: req.value.body });
  console.log(req.value.body);
});

// Login Route
router.get("/login", (req, res) => {
  res.send("Login ");
});

module.exports = router;
