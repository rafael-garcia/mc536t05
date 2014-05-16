var mysql = require('mysql');

module.exports = {
    connection: function() {
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'mc536',
            port: 3307
        });
        return connection;
    },
    query: function() {
        var connection = this.connection();
        return connection.query.apply(connection, arguments);
    }
};