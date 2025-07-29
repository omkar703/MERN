const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

app.set("view engine", "ejs");
// use a css images js etc
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  fs.readdir("./files", (err, files) => {
    console.log(files);
    res.render("index", { files: files });
  });
});

app.post("/create", (req, res) => {
  const fileName = req.body.title.trim().replace(/\s+/g, "_") + ".txt";
  fs.writeFile(`./files/${fileName}`, req.body.description, (err) => {
    if (err) {
      console.error("Error creating file:", err);
      return res.status(500).send("Error creating file");
    }
    console.log("File created successfully.");
    res.redirect("/");
  });
});

app.get("/file/:file", (req, res) => {
  const fileName = req.params.file;
  fs.readFile(`./files/${fileName}`, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return res.status(500).send("Error reading file");
    }
    res.render("file", { fileName: fileName, fileContent: data });
  });
});

app.post("/delete/:file", (req, res) => {
  const filePath = path.join(__dirname, "files", req.params.file);
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error("Failed to delete:", err);
      return res.status(500).send("Error deleting file");
    }
    res.redirect("/");
  });
});

app.get("/edit/:file", (req, res) => {
  const fileName = req.params.file;
  fs.readFile(`./files/${fileName}`, "utf8", (err, data) => {
    if (err) return res.status(500).send("File read error");
    res.render("edit", { fileName, content: data });
  });
});

app.post("/edit/:file", (req, res) => {
  const oldFileName = req.params.file;
  const newTitle = req.body.title.trim();
  const newFileName = newTitle.endsWith(".txt") ? newTitle : `${newTitle}.txt`;
  const newContent = req.body.description;

  const oldFilePath = path.join(__dirname, "files", oldFileName);
  const newFilePath = path.join(__dirname, "files", newFileName);

  // Rename file if file name has changed
  fs.rename(oldFilePath, newFilePath, (renameErr) => {
    if (renameErr && oldFileName !== newFileName) {
      console.error("Rename error:", renameErr);
      return res.status(500).send("Failed to rename file");
    }

    // Write the updated content to the (renamed or same) file
    fs.writeFile(newFilePath, newContent, (writeErr) => {
      if (writeErr) {
        console.error("Write error:", writeErr);
        return res.status(500).send("Failed to update file");
      }
      res.redirect("/");
    });
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
