// Import MySQL connection.
var connection = require("./connection.js");

// define orm
var orm = {
    selectAll: function (tableName) {
        console.log("In orm.js");
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function (tableName, insertItem) {
        var queryString = "INSERT INTO ?? SET ?";

        console.log(queryString);

        connection.query(queryString, [tableName, { burger_name: insertItem }], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    UpdateOne: function (tableName, updateValue, updateCondition) {
        var queryString = "UPDATE ?? SET ? WHERE ?"

        console.log(queryString);

        connection.query(queryString, [tableName,
            { devoured: updateValue },
            { id: updateCondition }],
            function (err, result) {
                if (err) throw err;
                console.log(result);
            });
    }
};

// Export orm
module.exports = orm;
