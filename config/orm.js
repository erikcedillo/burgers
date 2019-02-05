var connection = require("../config/connection.js");

var orm = {
  selectAll: function (tableInput, cb) {
    connection.query("SELECT * FROM " + tableInput + ";", function (err, result) {
      if (err) throw err;
      cb(result);
    })
  },

  insertOne: function (tableInput, colName, val, cb) {
    var query = "INSERT INTO ?? ( ?? ) VALUES (?)";
    connection.query(query, [tableInput, colName, val], function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  updateOne: function (tableInput, condition, cb) {
    connection.query("UPDATE " + tableInput + " SET devoured=1 WHERE id=" + condition + ";", function (err, result) {
      if (err) throw err;
      cb(result);
    })
  }
};

module.exports = orm;