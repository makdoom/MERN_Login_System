const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
require("dotenv").config();

// Initialization
const app = express();

// Database Config
mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("Connected to DB")
);

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.get("/", (req, res) => {
  res.send("Hello from express");
});

app.use("/auth/users", require("./routes/authRoutes"));

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running at ${port}`));
