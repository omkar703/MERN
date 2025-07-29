const express = require("express");
const app = express();
const userModel = require("./usermodel");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/create", async (req, res) => {
  let user = await userModel.create({
    name: "Omkar w222",
    email: "omkar@gmail221.com",
    password: "223232342",
  });
  res.send(user);
});

// Update user route
app.put("/update", async (req, res) => {
  let updatedUser = await userModel.findOneAndUpdate(
    { name: "Omkar" },
    { name: "omkar Ajitkumar Phadatare" },
    { new: true }
  );
  res.send(updatedUser);
});

app.get("/read", async (req, res) => {
  // let user = await userModel.findOne({ name: "Omkar" });
  let user = await userModel.find();
  res.send(user);
});

app.get("/delete", async (req, res) => {
  let user = await userModel.findOneAndDelete({ name: "Omkar" });
  res.send(user);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
