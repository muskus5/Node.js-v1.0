const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html",
  });
  if (req.url === "/") {
    fs.readFile(path.join(__dirname, "publick", "index.html"), (err, data) => {
      if (err) {
        throw err
      }
    });
  }
  res.end("<h1>Hello NodeJS!!!</h1>");
});

server.listen(3000, () => {
  console.log("Server has been started...");
});
