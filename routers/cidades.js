var express = require('express');
var dbaccess = require('../dbaccess');
var router = express.Router();

router.get('/', function(req, res) {
    dbaccess.query('SELECT * FROM cidade', function(err, rows, fields) {
        res.send(rows);
    });
});

router.post('/', function(req, res) {
    var query = 'INSERT INTO cidade (nome) VALUES (?)';
    var params = [req.body.nome];
    dbaccess.query(query, params, function(err, result) {
        res.send(req.body);
    });
});

router.post('/', function(req, res) {
    var query = 'INSERT INTO usuario (login, nome, cidade, uri) VALUES (?, ?, ?, ?)';
    var params = [req.body.login, req.body.nome, req.body.cidade, req.body.uri];
    dbaccess.query(query, params, function(err, result) {
        res.send(req.body);
    });
});

router.put('/:cidade', function(req, res) {
    var query = 'UPDATE cidade SET nome = ?';
    var params = [req.body.nome];
    dbaccess.query(query, params, function(err, result) {
        res.send(result);
    });
});

router['delete']('/:cidade', function(req, res) {
    var query = 'DELETE FROM cidade WHERE nome = ?';
    var params = [req.params.cidade];
    dbaccess.query(query, params, function(err, result) {
        res.send(result);
    });
});


module.exports = router;