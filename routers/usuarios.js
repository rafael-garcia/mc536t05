var express = require('express');
var dbaccess = require('../dbaccess');
var router = express.Router();

router.get('/', function(req, res) {
    dbaccess.query('SELECT * FROM usuario', function(err, rows, fields) {
        res.send(rows);
    });
});

router.post('/', function(req, res) {
    dbaccess.query('INSERT INTO usuario SET ?', req.body, function(err, result) {
        res.send(req.body);
    });
});

module.exports = router;