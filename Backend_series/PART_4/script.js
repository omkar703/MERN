// Express js Freamwork
// Introduction to Express.js
// Express js --> npm package
// freamework -> give the flow to do work
// Setting up a basic Express server
// routing
// Middleware
// Request and Response handling
// Error handling
//
//
//
// express js basic server
// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
// app.get("/profile", (req, res) => {
//   res.send("you are at profile page");
// });
// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });
//
//
//
// middeware
const express = require("express");
const app = express();
// before every request app.use is used
app.use((req, res, next) => {
  console.log("Middleware function is called");
  next(); // req aage forwad karo
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/about", (req, res) => {
  res.send("This is about page");
});
// app.get("/profile", (req, res, next) => {
//   return next(new Error("This is an error"));
// });

// app.use((err, req, res) => {
//   console.log("Error middleware function is called");
//   console.error(err.stack);
//   res.status(500).send("Something went wrong!");
// });

app.get("/profile", (req, res, next) => {
  // Simulating an error
  const error = new Error("This is an error");
  return next(error); // Pass the error to the next middleware
});

app.use((err, req, res, next) => {
  console.log("Error middleware function is called");
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
