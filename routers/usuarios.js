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

router.put('/:login', function(req, res) {
    var query = 'UPDATE usuario SET uri = ?, nome = ?, cidade = ? WHERE login = ?';
    var values = [req.body.uri, req.body.nome, req.body.cidade, req.params.login];
    dbaccess.query(query, values, function(err, result) {
        res.send(result);
    });
});

module.exports = router;