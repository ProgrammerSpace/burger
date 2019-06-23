// Set up MySQL connection.
var mysql = require("mysql");

// jawsdb addon created
// JAWSDB_URL saved in .env
// NODE_MODULES_CACHE is set to false
// Jawsdb databse `txtyyh8t8yp0ilyj` is all set with required table
// Still deploying on heroku says
// Error: Cannot find module './controllers/Burgers_Controller.js'
// Works fine locally

// var connection = mysql.createConnection(process.env.JAWSDB_URL);

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
});

// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;
