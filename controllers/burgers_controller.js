var express = require("express");

var router = express.Router();

// Import the model
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    console.log("In burgers_controller.js");
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/newburger", function (req, res) {
    burger.create("Double Cheese", function (result) {
        console.log(result);
        res.json(result);
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update(true, req.params.id, function (result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    }
    );
});

// Exporting routes for server.js 
module.exports = router;
