var util = require("util");
var request = require("request");

var DEFAULT_URL = "http://musicbrainz.org/ws/2/artist/%s/?inc=aliases&fmt=json";

var QUERY_URL = "http://musicbrainz.org/ws/2/artist/?query=%s&inc=aliases&fmt=json";

module.exports = {
    getArtistInfo: function(mbid, callback) {
    	var query = util.format(DEFAULT_URL, mbid);
        request.get(query, callback);
    },
    getArtistByName: function(artista, callback) {
    	var query = util.format(QUERY_URL, artista);
        request.get(query, callback);
    }
};