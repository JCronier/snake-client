// input.js

const { UP_KEY, DOWN_KEY, RIGHT_KEY, EXIT_KEY, MESSAGE_KEY, LEFT_KEY } = require("./constants");
const prompt = require("prompt-sync")();

let connection;

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", key => handleUserInput(key));

  return stdin;
};

const handleUserInput = function(key) {
  if (key === EXIT_KEY) {
    console.log("Thanks for playing");
    process.exit();
  } else if (key === UP_KEY) {
    connection.write("Move: up");
  } else if (key === LEFT_KEY) {
    connection.write("Move: left");
  } else if (key === DOWN_KEY) {
    connection.write("Move: down");
  } else if (key === RIGHT_KEY) {
    connection.write("Move: right");
  } else if (key === MESSAGE_KEY) {
    const message = prompt("Message: ");
    connection.write(`Say: ${message}`);
  }
};

module.exports = { setupInput };