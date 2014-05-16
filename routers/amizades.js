var express = require('express');
var dbaccess = require('../dbaccess');
var router = express.Router();
var lastfm = 

router.get('/', function(req, res) {
    dbaccess.query('SELECT * FROM amizade', function(err, rows, fields) {
        res.render('amizades/index', {
            amizades: rows
        });
    });
});

router.get('/criar', function(req, res) {
    res.render('amizades/form');
});

router.post('/', function(req, res) {
    var query = 'INSERT INTO amizade (solicitante, solicitado) VALUES (?, ?)';
    var params = [req.body.solicitante, req.body.solicitado];
    dbaccess.query(query, params, function(err, result) {
        res.redirect('/amizades');
    });
});

router.get('/editar/:solicitante/:solicitado', function(req, res) {
    var query = 'SELECT * FROM amizade WHERE solicitante = ? AND solicitado = ?';
    var params = [req.params.solicitante, req.params.solicitado];
    dbaccess.query(query, params, function(err, result) {
        res.render('amizades/form', result[0]);
    });
});

router.post('/:solicitante/:solicitado', function(req, res) {
    var query = 'UPDATE amizade SET solicitante = ?, solicitado = ? WHERE solicitante = ? AND solicitado = ?';
    var params = [req.body.solicitante, req.body.solicitado, req.params.solicitante, req.params.solicitado];
    dbaccess.query(query, params, function(err, result) {
        res.redirect('/amizades');
    });
});

router['delete']('/:solicitante/:solicitado', function(req, res) {
    var query = 'DELETE FROM amizade WHERE solicitante = ? AND solicitado = ?';
    var params = [req.params.solicitante, req.params.solicitado];
    dbaccess.query(query, params, function(err, result) {
        res.send(result);
    });
});

module.exports = router;