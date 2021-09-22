const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "135.23.223.133",
    port: 50542,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log('Message from server: ', data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: JWC");
  });

  conn.on("end", () => {
    console.log("Disconnected from server.");
    process.exit();
  })
  
  return conn;
};

module.exports = { connect };