var express = require('express');
var dbaccess = require('../dbaccess');
var router = express.Router();

router.get('/', function(req, res) {
    dbaccess.query('SELECT * FROM amizade', function(err, rows, fields) {
        res.send(rows);
    });
});

router.post('/', function(req, res) {
    var query = 'INSERT INTO amizade (solicitante, solicitado) VALUES (?, ?)';
    var params = [req.body.solicitante, req.body.solicitado];
    dbaccess.query(query, params, function(err, result) {
        res.send(result);
    });
});

module.exports = router;