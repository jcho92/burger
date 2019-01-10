
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "xefi550t7t6tjn36.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "pnre89ozuwh66jrb",
  password: "ivg59kzo7qv8dlrj",
  database: "dw6s8m956jrel937"
});


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


module.exports = connection;
