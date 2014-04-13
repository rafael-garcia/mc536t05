var express = require('express');
var dbaccess = require('../dbaccess');
var router = express.Router();

router.get('/', function(req, res) {
    dbaccess.query('SELECT * FROM cidade', function(err, rows, fields) {
        res.send(rows);
    });
});

router.post('/', function(req, res) {
    dbaccess.query('INSERT INTO cidade (nome, estado_id) VALUES (?)', req.cidade, function(err, result) {
        res.send(result.insertId);
    });
});

module.exports = router;