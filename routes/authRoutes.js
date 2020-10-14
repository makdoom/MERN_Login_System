const router = require("express").Router();

// Register Route
router.post("/register", (req, res) => {
  res.send("Register");
});

// Login Route
router.get("/login", (req, res) => {
  res.send("Login ");
});

module.exports = router;
