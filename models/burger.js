// Importing ORM
var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        console.log("In burger.js");
        orm.selectAll("burgers", function (res) {
            console.log("Returned data: \n" + res);
            cb(res);
        });
    },
    create: function (val, cb) {
        orm.insertOne("burgers", val, function (res) {
            cb(res);
        });
    },
    update: function (val, condition, cb) {
        orm.UpdateOne("burgers", val, condition, function (res) {
            cb(res);
        });
    }
};

// Exporting database functions for controller
module.exports = burger;
