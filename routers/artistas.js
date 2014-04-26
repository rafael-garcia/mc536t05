var express = require('express');
var dbaccess = require('../dbaccess');
var fs = require('fs');
var util = require('util');
var router = express.Router();

router.get('/', function(req, res) {
    dbaccess.query('SELECT * FROM artista', function(err, rows, fields) {
        res.render('artistas/index', {
            artistas: rows
        });

        fs.unlinkSync("./normalizados.txt");
        rows.forEach(function(el) {
            var original = util.format('original: %s (%d) - ', el.nome_artistico, el.nome_artistico.length);
            var normal = decodeURIComponent(el.nome_artistico);
            var decoded = util.format('decoded: %s (%d) \n', normal, normal.length);
            fs.appendFileSync("./normalizados.txt", original);
            fs.appendFileSync("./normalizados.txt", decoded);


        });
    });
});

router.post('/', function(req, res) {
    var query = 'INSERT INTO artista (nome_artistico) VALUES (?)';
    var params = [req.body.nomeArtistico];
    dbaccess.query(query, params, function(err, result) {
        res.redirect('/artistas');
    });
});

router.get('/criar', function(req, res) {
    res.render('artistas/form');
});

router.post('/:nomeArtistico', function(req, res) {
    var query = 'UPDATE artista SET nome_artistico = ? WHERE nome_artistico = ?';
    var params = [req.body.nomeArtistico, req.params.nomeArtistico];
    dbaccess.query(query, params, function(err, result) {
        res.redirect('/artistas');
    });
});

router.get('/editar/:nomeArtistico', function(req, res) {
    var query = 'SELECT * FROM artista WHERE nome_artistico = ?';
    var params = [req.params.nomeArtistico];
    dbaccess.query(query, params, function(err, result) {
        res.render('artistas/form', result[0]);
    });
});

router['delete']('/:nomeArtistico', function(req, res) {
    var query = 'DELETE FROM artista WHERE nome_artistico = ?';
    var params = [req.params.nomeArtistico];
    dbaccess.query(query, params, function(err, result) {
        res.send(result);
    });
});

module.exports = router;