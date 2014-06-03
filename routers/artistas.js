var express = require('express');
var router = express.Router();
var lastfm = require("../LastfmSearcher");
var mbrainz = require("../MusicBrainzSearcher");
var Pais = require("../entity/pais");
var Cidade = require("../entity/cidade");
var Artista = require("../entity/artista");
var dao = require('../dao');
var dbaccess = require('../dbaccess');
var extracao = require('../extracao.js');

router.get('/extrair/:artista', function(req, res) {
    var nomeArtistico = req.params.artista; // nome vindo da URL
    lastfm.getArtistInfo(nomeArtistico, function(err, result) {
        extracao.processarResultado(result, nomeArtistico);
    });
});

router.get('/extrair', function(req, res) {
    var query = 'SELECT nome_artistico FROM artista';
    dbaccess.query(query, function(err, rows) {
        var artistas = rows.map(function(row) { // varre a base de artistas
            return row['nome_artistico'];
        });
        lastfm.on('artistInfo', function(err, result, nomeArtistico) { // listener de evento do lastfm
            extracao.processarResultado(result, nomeArtistico);
        });
        lastfm.getArtistInfoByBatch(artistas); // dispara evento do lastfm
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