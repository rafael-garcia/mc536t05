var util = require("util");
var request = require("request");

var DEFAULT_URL = "http://musicbrainz.org/ws/2/artist/%s/?inc=aliases&fmt=json";

var QUERY_URL = "http://musicbrainz.org/ws/2/artist/?query=%s&inc=aliases&fmt=json";

var fixName = function(name) {
    name = name || '';
    name = decodeURIComponent(name);
    name = name.replace(/_/g, ' ');
    name = name.replace(/\(\w+\)/g, '');
    name = name.replace("!", "");
    return name;
};

module.exports = {
    getArtistInfo: function(mbid, callback) {
    	setTimeout(function() {
	    	var query = util.format(DEFAULT_URL, mbid);
	        request.get(query, callback);
	    }, 3000);
    },
    getArtistByName: function(artista, callback) {
    	setTimeout(function() {
	    	var corrigido = fixName(artista), query = util.format(QUERY_URL, corrigido);
	        request.get(query, callback);
    	}, 3000);
    }
};