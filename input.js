// input.js

const { stdin, stdout } = require("process");
const prompt = require("prompt-sync")();

let connection;
let messageFlag = false;

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  messageFlag = false;
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", key => handleUserInput(key));
  return stdin;
};

const handleUserInput = function(key) {
  if (messageFlag) {
    return;
  }
  if (key === "\u0003") {
    console.log("Thanks for playing");
    process.exit();
  } else if (key === "w") {
    connection.write("Move: up");
  } else if (key === "a") {
    connection.write("Move: left");
  } else if (key === "s") {
    connection.write("Move: down");
  } else if (key === "d") {
    connection.write("Move: right");
  } else if (key === "m") {
    const message = prompt("Message: ");
    connection.write(`Say: ${message}`);
  }
};

module.exports = { setupInput };