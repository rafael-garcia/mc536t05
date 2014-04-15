var express = require('express');
var dbaccess = require('../dbaccess');
var router = express.Router();

router.get('/', function(req, res) {
    dbaccess.query('SELECT * FROM curtida', function(err, rows, fields) {
        res.send(rows);
    });
});

router.post('/', function(req, res) {
    var query = 'INSERT INTO curtida (usuario, artista, nota) VALUES (?, ?, ?)';
    var params = [req.body.usuario, req.body.artista, req.body.nota];
    dbaccess.query(query, params, function(err, result) {
        res.send(result);
    });
});

router.post('/:usuario/:artista', function(req, res) {
    var query = 'UPDATE curtida SET usuario = ?, artista = ?, nota = ? WHERE usuario = ? AND artista = ?';
    var params = [req.body.usuario, req.body.artista, req.body.nota, req.params.usuario, req.params.artista];
    dbaccess.query(query, params, function(err, result) {
        res.send(result);
    });
});

module.exports = router;