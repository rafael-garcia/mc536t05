var express = require('express');
var dbaccess = require('../dbaccess');
var router = express.Router();

router.get('/', function(req, res) {
    dbaccess.query('SELECT * FROM amizade', function(err, rows, fields) {
        res.send(rows);
    });
});

module.exports = router;