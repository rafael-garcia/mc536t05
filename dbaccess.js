var mysql = require('mysql');
var config = require('./config');

module.exports = {
    connection: function() {
        var connection = mysql.createConnection({
            host: config.database.host,
            user: config.database.user,
            database: config.database.database,
            port: config.database.port
        });
        return connection;
    },
    query: function() {
        var connection = this.connection();
        return connection.query.apply(connection, arguments);
    }
};