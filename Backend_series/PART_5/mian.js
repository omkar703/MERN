// form handling and working with the forms
// handle backend process of forms and making sure the data coming form any frontend lib , fw ,temp eng
// session
// cookie

const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "1234") {
    req.session.loggedIn = true;
    res.redirect("/admin");
  } else {
    res.redirect("/login");
  }
});

app.get("/admin", (req, res) => {
  if (req.session.loggedIn) {
    res.sendFile(path.join(__dirname, "public/admin.html"));
  } else {
    res.redirect("/login");
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/login");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
