// Node jws basics
// Introduction to Node.js
// node and npm
// Installing Node.js and npm
// Working with modules
// file system operations
// understanding HTTP module

// const fs = require("fs");
// fs.writeFile("hello.txt", "Hello, World!", (err) => {
//   if (err) {
//     console.error("Error writing to file", err);
//   }
//   console.log("File written successfully");
// });
//
//
// append on the file
//
//
//
// const fs = require("fs");
// fs.appendFile("hello.txt", "Hi there Omkar this side", (err) => {
//   if (err) {
//     console.error("Error writing to file", err);
//   }
//   console.log("File written successfully");
// });
//
//
//
// --remame
// const fs = require("fs");
// fs.rename("hello.txt", "newfile.txt", (err) => {
//   if (err) {
//     console.error("Error writing to file", err);
//   }
//   console.log("File written successfully");
// });
//
//
//-- copy
// const fs = require("fs");
// fs.copyFile("newfile.txt", "hello.txt", (err) => {
//   if (err) {
//     console.error("Error writing to file", err);
//   }
//   console.log("File written successfully");
// });
//
//
//-- unlink (delete file)
// const fs = require("fs");
// fs.unlink("newfile.txt", (err) => {
//   if (err) {
//     console.error("Error can't delete", err);
//   }
//   console.log("File removed successfully");
// });
//
//
//
// -- rmdir (delete directory) but need to be empty
// rm
// const fs = require("fs");
// fs.rm("copy", { recursive: true }, (err) => {
//   if (err) {
//     console.error("Error can't delete", err);
//   }
//   console.log("Directory removed successfully");
// });
//
//
//
// -- mkdir (create directory)
// const fs = require("fs");
// fs.mkdir("copy", (err) => {
//   if (err) {
//     console.error("Error can't create", err);
//   }
//   console.log("Directory created successfully");
// });
//
//
//
// -- readdir (read directory)
// const fs = require("fs");
// fs.readdir("copy", (err, files) => {
//   if (err) {
//     console.error("Error can't read", err);
//   }
//   console.log("Directory read successfully", files);
// });
