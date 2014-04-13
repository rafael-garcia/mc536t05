var express = require('express');
var dbaccess = require('../dbaccess');
var router = express.Router();

router.get('/', function(req, res) {
    var query = 'SELECT * FROM usuario';
    dbaccess.query(query, function(err, rows, fields) {
        res.send(rows);
    });
});

router.post('/', function(req, res) {
    var query = 'INSERT INTO usuario (login, nome, cidade, uri) VALUES (?, ?, ?, ?)';
    var values = [req.body.login, req.body.nome, req.body.cidade, req.body.uri];
    dbaccess.query(query, values, function(err, result) {
        res.send(req.body);
    });
});

router.put('/:login', function(req, res) {
    var query = 'UPDATE usuario SET uri = ?, nome = ?, cidade = ? WHERE login = ?';
    var values = [req.body.uri, req.body.nome, req.body.cidade, req.params.login];
    dbaccess.query(query, values, function(err, result) {
        res.send(result);
    });
});

module.exports = router;