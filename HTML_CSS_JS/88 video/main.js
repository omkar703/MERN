const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
//
//
// app.post or app.put or app.delete (path , handler)
app.get("/", (req, res) => {
  res.send("Hello World!");
});
//
//
// about
app.get("/about", (req, res) => {
  res.send("Hello World about!");
});
//
// contact
app.get("/contact", (req, res) => {
  res.send("Hello World! contact");
});

// create a blog
// app.get("/blog/intro-js", (req, res) => {
//   res.send("This is intro js");
// });

// app.get("/blog/intro-py", (req, res) => {
//   res.send("This is intro py");
// });
//
// slug
// app.get(`/blog/:slug/:second`, (req, res) => {
//   // url = http://localhost:3000/blog/into-to-hary/padisu/?mode=dark&region=in
//   // req.params.slug = intro-to-hary
//   // req.params.second = padisu
//   // req.query.mode = dark
//   // req.query.region = in
//   res.send(`slug = ${req.query} , second = ${req.params.second}`);
//   console.log(req.params.slug);
//   res.send(`This is intro ${req.params.slug} and ${req.params.second}`);
// });
// // url = http://localhost:3000/blog/into-to-hary/padisu/?mode=dark&region=in
// create a endpoint with slug that show me mode and region and quary and params
app.get("/blog/:slug/:second", (req, res) => {
  const { slug, second } = req.params; // Extract route parameters
  const { mode, region } = req.query; // Extract query parameters

  res.send(
    `Slug: ${slug}, Second: ${second}, Mode: ${mode}, Region: ${region}`
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
