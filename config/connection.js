const Sequelize = require('sequelize');

require('dotenv').config();

// connection to database
// const sequelize = process.env.JAWSDB_URL
//   ? new Sequelize(process.env.JAWSDB_URL)
//   : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//       use_env_variable: JAWSDB_URL,
//       dialect: 'mysql',
//       port: process.env.PORT||3306
// });




// let sequelize;

// if (process.env.JAWSDB_URL) {
//     sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else {
//     sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//         host: 'localhost',
//         dialect: 'mysql',
//         port: 3306
//     });
// }

var mysql = require("mysql");
var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    //change back to "password"
    password: "password",
    database: "petPartyDB"
  });
}
//console.log(process.env.JAWSDB_URL);
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  //console.log("connected as id " + connection.threadId);
});
module.exports = connection;



// module.exports = sequelize;