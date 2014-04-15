var express = require('express');
var dbaccess = require('../dbaccess');
var router = express.Router();

router.get('/', function(req, res) {
    dbaccess.query('SELECT * FROM curtida', function(err, rows, fields) {
        res.render('curtidas/index', {
            curtidas: rows
        });
    });
});

router.get('/criar', function(req, res) {
    res.render('curtidas/form');
});

router.post('/', function(req, res) {
    var query = 'INSERT INTO curtida (usuario, artista, nota) VALUES (?, ?, ?)';
    var params = [req.body.usuario, req.body.artista, req.body.nota];
    dbaccess.query(query, params, function(err, result) {
        res.redirect('/curtidas');
    });
});

router.get('/editar/:usuario/:artista', function(req, res) {
    var query = 'SELECT * FROM curtida WHERE usuario = ? AND artista = ?';
    var params = [req.params.usuario, req.params.artista];
    dbaccess.query(query, params, function(err, result) {
        res.render('curtidas/form', result[0]);
    });
});

router.post('/:usuario/:artista', function(req, res) {
    var query = 'UPDATE curtida SET usuario = ?, artista = ?, nota = ? WHERE usuario = ? AND artista = ?';
    var params = [req.body.usuario, req.body.artista, req.body.nota, req.params.usuario, req.params.artista];
    dbaccess.query(query, params, function(err, result) {
        res.redirect('/curtidas');
    });
});

router['delete']('/:usuario/:artista', function(req, res) {
    var query = 'DELETE FROM curtida WHERE usuario = ? AND artista = ?';
    var params = [req.params.usuario, req.params.artista];
    dbaccess.query(query, params, function(err, result) {
        res.send(result);
    });
});

module.exports = router;