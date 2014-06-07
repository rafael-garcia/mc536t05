var mysql = require('mysql');
var config = require('./config.json');

var pool = mysql.createPool({
    connectionLimit : 80, // lazily created (on demand). round robin
    host            : config.database.host,
    user            : config.database.user,
    password		: config.database.password,
    database        : config.database.database,
    port            : config.database.port
});

module.exports = {
    query: function() {
        return pool.query.apply(pool, arguments);
    },
    chainPattern: function(err, result, onSuccess, onError) {
        if (err) {
            if (onError) {
                onError();
            } else {
                throw err;
            }
        } else {
            if (onSuccess) {
                onSuccess();
            }
        }
    }
};
