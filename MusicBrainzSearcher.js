var util = require("util");
var request = require("request");

var DEFAULT_URL = "http://musicbrainz.org/ws/2/artist/%s/?inc=aliases&fmt=json";

module.exports = {
    getArtistInfo: function(mbid, callback) {
    	var query = util.format(DEFAULT_URL, mbid);
        request.get(query, callback);
    }
};