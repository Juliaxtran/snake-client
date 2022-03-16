const net = require("net");
const { IP, PORT } = require("./constants");
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  conn.setEncoding("utf8");
  // interpret incoming data as text
  conn.on("connect", () => {
    console.log("Successfully connected to game server")
    conn.write("Name: JT");
   


  }
  )
  conn.on("data", (data) => {
  console.log("Server outputs:", data);
  });
 
  return conn;
};


module.exports = { connect };