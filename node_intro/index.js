// modules are little packages we can use for our project
// http module is a built-in module in Node.js
// we can uset it to create a web server - a server that listes for requests and sends responseds to the client

// We can use the require() function to import a module
var http = require("http");

http
  .createServer(
    // take a callback function as an argument, this callback function will have access to the request and response objects
    function (req, res) {
      // write response for the client
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write('{ "name": "John Doe", "age": 30 }');
    }
  )
  .listen(8080); // listen for requests on port 8080
// ports are like doors to a house, they are the entry points to a server
