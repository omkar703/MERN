const express = require("express");
const birds = require("./routes/blog");

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use("/blog", birds);
// Basic route
app
  .get("/", (req, res) => {
    console.log("hey it is a get req");
    res.send("Hello World!");
  })
  .post("/", (req, res) => {
    console.log("hey it is a post req");
    res.send("Hello World! post");
  })
  .put("/", (req, res) => {
    console.log("hey it is a put req");
    res.send("Hello Worldput req");
  });

app.get("/index", (req, res) => {
  res.sendFile("templates/index.html", { root: __dirname });
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello World!" });
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
