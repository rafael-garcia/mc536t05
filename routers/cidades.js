var express = require('express');
var mysql = require('mysql');
var util = require('util');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'mc536'
    });
    connection.query('SELECT * FROM cidade', function(err, rows, fields) {
        res.send(rows);
    });
});

module.exports = router;