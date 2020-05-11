var mysql = require("mysql");
var connection

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else{
  connection = mysql.createConnection({
  host: "ehc1u4pmphj917qf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "p9lmh464hgxscar8",
  password: "if9nbyinh57ptvwp",
  database: "r3ia6y85xbnesgpd"
});};

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
