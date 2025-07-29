// app.js

const express = require("express");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

// ✅ Connect to MongoDB here only
mongoose
  .connect("mongodb://localhost:27017/auth-demo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Import model
const User = require("./models/user");

// Middleware and setup
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

// Routes
app.get("/", (_req, res) => {
  res.render("index");
});

app.post("/create", async (req, res) => {
  const { name, email, password, age } = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const newUser = new User({ name, email, password: hash, age });
    await newUser.save();

    const token = jwt.sign({ email }, "secret", { expiresIn: "1h" });

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 3600000,
    });

    res.send("User created and token sent.");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating user");
  }
});

app.get("/logout", (_req, res) => {
  res.clearCookie("token");
  res.redirect("/");
});

app.get("/login", (_req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.send("User not found");
      return;
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      res.send("Invalid password");
      return;
    }

    const token = jwt.sign({ email }, "secret", { expiresIn: "1h" });
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 3600000,
    });
    res.send("Login successful");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error logging in");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
