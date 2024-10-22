// modules are little packages we can use for our project
// http module is a built-in module in Node.js
// we can uset it to create a web server - a server that listes for requests and sends responseds to the client

// any file in node.js is consideree a module, giving us ability to export and import code between files/modules
//console.log(module);

// waht are some of the built-in modules in Node.js?
// console, http, fs, path, os, url, querystring, events, etc.
// path module is used to work with file paths
const path = require("node:path");
const x = path.parse(__filename); // __filename is a global variable that contains the path to the current file
console.log(x);
// We can use the require() function to import a module

// os for operating system
const os = require("node:os");
console.log(os.type());
console.log(os.platform());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.release());
console.log(os.uptime());
console.log(os.totalmem());
console.log(os.freemem());

var http = require("http");
// import log function from logger.js
// ./filename: this means current folder
// ../filename: this means parent folder
// /filename: this means root folder
const log = require("./logger");

http
  .createServer(
    // take a callback function as an argument, this callback function will have access to the request and response objects
    function (req, res) {
      log("request received into database");
      // write response for the client
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write('{ "name": "John Doe", "age": 30 }');
    }
  )
  .listen(8080); // listen for requests on port 8080
// ports are like doors to a house, they are the entry points to a server
