var express = require('express');
var dbaccess = require('../dbaccess');
var router = express.Router();

router.get('/', function(req, res) {
    var query = 'SELECT * FROM usuario';
    dbaccess.query(query, function(err, rows, fields) {
        res.render('usuarios/index', { 
            usuarios: rows
        });
    });
});

router.post('/', function(req, res) {
    var query = 'INSERT INTO usuario (login, nome, cidade, uri) VALUES (?, ?, ?, ?)';
    var params = [req.body.login, req.body.nome, req.body.cidade, req.body.uri];
    dbaccess.query(query, params, function(err, result) {
        res.redirect('/usuarios');
    });
});

router.get('/criar', function(req, res) {
    res.render('usuarios/form');
});

router.post('/:login', function(req, res) {
    var query = 'UPDATE usuario SET uri = ?, nome = ?, cidade = ? WHERE login = ?';
    var params = [req.body.uri, req.body.nome, req.body.cidade, req.params.login];
    dbaccess.query(query, params, function(err, result) {
        res.redirect('/usuarios');
    });
});

router.get('/editar/:login', function(req, res) {
    var query = 'SELECT * FROM usuario WHERE login = ?';
    var params = [req.params.login];
    dbaccess.query(query, params, function(err, result) {
        res.render('usuarios/form', result[0]);
    });
});

router['delete']('/:login', function(req, res) {
    var query = 'DELETE FROM usuario WHERE login = ?';
    var params = [req.params.login];
    dbaccess.query(query, params, function(err, result) {
        res.send(result);
    });
});

module.exports = router;