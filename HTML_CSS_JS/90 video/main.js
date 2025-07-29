const express = require("express");

const app = express();
const port = 3000;
const fs = require("fs");
// middleware
app.use(express.static("public"));
//
// middleware 1
app.use((req, res, next) => {
  console.log("hey it is a middleware1");
  console.log(req.headers);
  req.harry = "I am omkar";
  fs.appendFileSync(
    "public/logs.txt",
    `${Date.now()} is a ${req.method} request to ${req.url}\n`
  );

  // Remove res.send() to allow the request to proceed to the next middleware or route
  next();
});

app
  .get("/", (req, res) => {
    console.log("hey it is a get req");

    res.send("Hello World!");
  })
  .post("/", (req, res) => {
    console.log("hey it is a post req");
    res.send("Hello World! post");
  })
  .get("/about", (req, res) => {
    console.log("hey it is a get about req");
    res.send("Hello Worldput req " + req.harry);
  });

app.get("/api", (req, res) => {
  res.json({ message: "Hello World!", req: req.harry });
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
