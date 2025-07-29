const express = require("express");
const app = express();

app.set("view engine", "ejs");
// use a css images js etc
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/profile/:name", (req, res) => {
  res.send("Hello " + req.params.name);
});
app.get("/profile/:name/:books", (req, res) => {
  res.send("Hello " + req.params.name + " and " + req.params.books);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
