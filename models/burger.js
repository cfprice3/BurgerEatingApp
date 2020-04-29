var orm = require("../config/orm.js");

const burger = {
    all: function(cb) {
        console.log(orm);
        orm.getAll("burgers",function(res) {
            cb(res);
        });
    }, 

    addB: function(cols, vals, cb) {
        orm.addBurger("burgers", cols, vals, function(res) {
            cb(res);
        });
    },

    updateB: function(objColVals, condition, cb) {
        orm.updateBurger("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    },

    deleteB: function(condition, cb) {
        orm.deleteBurger("burgers", condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;