// Import MySQL connection.
var connection = require("./connection.js");

// define orm
var orm = {
    selectAll: function (tableName, cb) {
        console.log("In orm.js");
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function (err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    insertOne: function (tableName, insertItem, cb) {
        var queryString = "INSERT INTO ?? SET ?";

        console.log(queryString);

        connection.query(queryString, [tableName, { burger_name: insertItem }], function (err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    UpdateOne: function (tableName, updateValue, updateCondition, cb) {
        var queryString = "UPDATE ?? SET ? WHERE ?"

        console.log(queryString);

        connection.query(queryString, [tableName,
            { devoured: updateValue },
            { id: updateCondition }],
            function (err, result) {
                if (err) throw err;
                console.log(result);
                cb(result);
            });
    }
};

// Export orm
module.exports = orm;
