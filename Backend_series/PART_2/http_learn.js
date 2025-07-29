// http protocol
// http is a protocol used for communication between client and server

const http = require("http");
// create a server
const server = http.createServer((req, res) => {
  res.end("Hello World");
});
server.listen(3000);
