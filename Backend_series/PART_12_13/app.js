const express = require("express");
const mongoose = require("mongoose");
const userModel = require("./models/user");

const app = express();

// Middleware
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/mongopractice");

// Routes
app.get("/", async (req, res) => {
  const users = await userModel.find();
  res.render("index", { users });
});

app.post("/create", async (req, res) => {
  const { name, email, image_url } = req.body;
  await userModel.create({ name, email, image_url });
  res.redirect("/");
});

app.get("/delete/:id", async (req, res) => {
  await userModel.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

app.get("/edit/:id", async (req, res) => {
  const user = await userModel.findById(req.params.id);
  res.render("edit", { user });
});

app.post("/edit/:id", async (req, res) => {
  const { name, email, image_url } = req.body;
  await userModel.findByIdAndUpdate(req.params.id, { name, email, image_url });
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
