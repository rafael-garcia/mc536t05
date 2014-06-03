var mysql = require('mysql');
var config = require('./config.json');

var pool = mysql.createPool({
    connectionLimit : 80, // lazily created (on demand). round robin
    host            : config.database.host,
    user            : config.database.user,
    database        : config.database.database,
    port            : config.database.port
});

module.exports = {
    query: function() {
        return pool.query.apply(pool, arguments);
    }
};