const express = require("express");
const app = express();
const userModel = require("./models/user");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const postModel = require("./models/post");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/register", async (req, res) => {
  let { email, name, username, age, password } = req.body;
  let user = await userModel.findOne({ email });
  if (user) return res.status(400).send("User already exists");
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return res.status(500).send("Error generating salt");
    bcrypt.hash(password, salt, async (err, hash) => {
      if (err) return res.status(500).send("Error hashing password");
      let newuser = await userModel.create({
        email,
        name,
        username,
        age,
        password: hash,
      });
      jwt.sign(
        { email: email, userid: newuser._id },
        "secretkey",
        (err, token) => {
          if (err) return res.status(500).send("Error generating token");
          res.cookie("token", token);
          res.send("User created successfully");
        }
      );
      res.redirect("/profile");
    });
  });
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });
    if (!user) return res.status(404).send("User not found");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).send("Incorrect password");

    const token = jwt.sign({ email: user.email, userid: user._id }, "secret", {
      expiresIn: "1h", // Token expires in 1 hour
    });

    res.cookie("token", token);

    res.redirect("/profile");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

app.get("/profile", (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.redirect("/login");

  try {
    const decoded = jwt.verify(token, "secret"); // Replace "secret" with your JWT secret
    userModel.findById(decoded.userid, (err, user) => {
      if (err || !user) return res.redirect("/login");
      res.render("profile", { user });
    });
  } catch (err) {
    res.redirect("/login");
  }
});

app.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/login");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
