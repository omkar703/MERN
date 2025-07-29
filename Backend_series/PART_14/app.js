const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

// bcrypt --> encryption and decryption
const bcrypt = require("bcrypt");

app.use(cookieParser());
//
//
const jwt = require("jsonwebtoken");

//
//
// app.get("/", (req, res) => {
//   res.cookie("name", "harsh");
//   res.send("done");
// });
// app.get("/read", (req, res) => {
//   res.send("read page");
//   // console.log(req.cookies);
// });
//
//
// mypassword
// password - $2b$10$jYR862zCPdG6VrPlEYJTneDMF7brAMFQIPLsH/wFimB25tU6iVFY6
// encrypt
// app.get("/", (_, res) => {
//   bcrypt.genSalt(10, function (error, salt) {
//     bcrypt.hash("mypassword", salt, function (error, hash) {
//       console.log(hash);
//       res.send("done");
//     });
//   });
// });
//
// decrypt
//
// app.get("/", (_, res) => {
//   // bcrypt.hash("mypassword", 10, function (error, hash) {
//   bcrypt.compare(
//     "mypassword",
//     "$2b$10$jYR862zCPdG6VrPlEYJTneDMF7brAMFQIPLsH/wFimB25tU6iVFY6",
//     function (error, result) {
//       console.log(result);
//       res.send("done");
//     }
//   );
//   // });
// });

app.get("/", (req, res) => {
  let token = jwt.sign({ email: "harsh@gmail.com" }, "secret");
  console.log(token);
  res.cookie("token", token);
  res.send("done");
});

app.get("/read", (req, res) => {
  let token = req.cookies.token;
  console.log(token);
  jwt.verify(token, "secret", (err, decoded) => {
    console.log(decoded);
    res.send("done");
  });
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
