const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    console.log(message);
    this.emit("messageLogged", { id: 1, url: "http://" });
  }
}

function log(message) {
  // logging request that has come to the server
  console.log(message);
}

module.exports = Logger;
