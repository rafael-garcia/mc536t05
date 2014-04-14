var express = require('express');
var dbaccess = require('../dbaccess');
var router = express.Router();

router.get('/', function(req, res) {
    var query = 'SELECT * FROM cidade';
    dbaccess.query(query, function(err, rows, fields) {
        res.render('cidades/index', { 
            cidades: rows
        });
    });
});

router.post('/', function(req, res) {
    var query = 'INSERT INTO cidade (nome) VALUES (?)';
    var params = [req.body.nome];
    dbaccess.query(query, params, function(err, result) {
        res.redirect('/cidades');
    });
});

router.get('/criar', function(req, res) {
    res.render('cidades/form');
});

router.post('/:cidade', function(req, res) {
    var query = 'UPDATE cidade SET nome = ? WHERE nome = ?';
    var params = [req.body.nome, req.params.cidade];    
    dbaccess.query(query, params, function(err, result) {
        res.redirect('/cidades');
    });
});

router.get('/editar/:cidade', function(req, res) {
    var query = 'SELECT * FROM cidade WHERE nome = ?';
    var params = [req.params.cidade];
    dbaccess.query(query, params, function(err, result) {
        res.render('cidades/form', result[0]);
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