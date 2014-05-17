var util = require('util');
var request = require('request');
var events = require('events');

var API_KEY = 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=%s&api_key=8265bfa09c0cf54acaa62dd704340581&format=json';

var fixName = function(name) {
    name = name || '';
    name = decodeURIComponent(name);
    name = name.replace(/_/g, ' ');
    name = name.replace(/\(\w+\)/g, '');
    return name;
};

var searcher = new events.EventEmitter;
searcher.getArtistInfo = function(artist, callback) {
    var query = util.format(API_KEY, artist);
    request.get(query, callback);
};

searcher.getArtistInfoByBatch = function(artists) {
    var self = this;
    artists.forEach(function(nome) {
        var corrigido = fixName(nome);
        self.getArtistInfo(corrigido, function(err, result) {
            self.emit('artistInfo', err, result, nome);
        });
    });
};

module.exports = searcher;