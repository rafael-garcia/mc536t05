var EventEmitter = require('events').EventEmitter;
var util = require('util');
var lastfm = require('./LastfmSearcher');
var dbaccess = require('./dbaccess');

module.exports = {
    atualizarIdentificadores: function(artistas) {
        lastfm.on('artistInfo', function(err, result) {
            var query = 'UPDATE artista SET mbid = ? WHERE nome_artistico = ?';
            var params = [ result.mbid, result['nome_artistico'] ];
            dbaccess.query(query, params);
        });
        lastfm.getArtistInfoByBatch(artistas);
    }
};