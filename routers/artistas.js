var express = require('express');
var dbaccess = require('../dbaccess');
var router = express.Router();
var lastfm = require("../LastfmSearcher");
var mbrainz = require("../MusicBrainzSearcher");

router.get('/', function(req, res) {
    dbaccess.query('SELECT * FROM artista', function(err, rows, fields) {
        res.render('artistas/index', {
            artistas: rows
        });
    });
});

router.get('/extrair/:artista', function(req, res) {
    lastfm.getArtistInfo(req.params.artista, function(err, result) {
        var content = JSON.parse(result.body);
        mbrainz.getArtistInfo(content.artist.mbid, function(err, result) {
            var mbContent = JSON.parse(result.body);
            console.log(mbContent);
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