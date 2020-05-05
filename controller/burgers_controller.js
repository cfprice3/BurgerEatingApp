var express = require("express");

var router = express.Router()

var burger = require("../models/burger.js")

router.get("/", function(req, res){
    burger.all(function(burgerData){
        res.render("index", {burger: burgerData});
      // res.json(burgerData)
    })
});

router.post("/api/burgers/create", function (req, res){
    burger.addB(["burger_name", "eaten"], [req.body.burger_name, req.body.eaten], function(result){
        res.json({ id: result.addId });
    });
});

router.put("/api/burgers/update/:id", function(req, res){
    var status = "id" + req.params.id;
    console.log("status", status);

    burger.updateB({ eaten: req.body.eaten }, status, function(result){
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end()
        }
    });
});

router.delete("/api/burgers/:id", function(req, res){
    var status = "id" + req.params.id;
    console.log("status", status);
    
    burger.deleteB(status, function(result){
        if (result.changedRows === 0){
            return res.status(404).end();
        } else{
            res.status(200).end();
        }
    });
});

module.exports = router;