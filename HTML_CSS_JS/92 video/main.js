const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

// Route for the home page
app.get("/", (req, res) => {
  let siteName = "My World";
  let searchText = "Search Now";
  let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"];
  res.render("index", {
    siteName: siteName,
    searchText: searchText,
    arr: arr,
  });
});

// Route for a blog post
app.get("/blog/:slug", (req, res) => {
  let blogTitle = "Hello World";
  let blogContent = "This is my first blog post";
  res.render("blogpost", {
    blogTitle: blogTitle,
    blogContent: blogContent,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
