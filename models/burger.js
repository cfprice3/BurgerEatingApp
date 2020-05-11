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

    updateB: function(id, cb) {
        var condition = "id=" + id;
        orm.updateBurger("burgers", {eaten: true}, condition, function(res) {
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