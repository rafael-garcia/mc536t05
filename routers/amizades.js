var express = require('express');
var mysql = require('mysql');
var util = require('util');
var router = express.Router();

router.get('/', function(req, res) {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'mc536'
    });
    connection.query('SELECT * FROM amizade', function(err, rows, fields) {
        res.send(rows);
    });
});

module.exports = router;