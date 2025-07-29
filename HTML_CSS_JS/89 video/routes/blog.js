const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/blogpost/:slug", (req, res) => {
  res.send(`fetch the blogpost for ${req.params.slug}`);
});

module.exports = router;
