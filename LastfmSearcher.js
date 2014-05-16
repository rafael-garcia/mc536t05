var util = require("util");
var request = require("request");

var API_KEY = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=%s&api_key=8265bfa09c0cf54acaa62dd704340581&format=json";

module.exports = {
    getArtistInfo: function(artist, callback) {
    	var query = util.format(API_KEY, artist);
        request.get(query, callback);
    },
    getSimilarArtists: function(artist, callback) { //TODO: ainda nao definido
    	var query = util.format(API_KEY, artist);
        request.get(query, callback);
    }
};