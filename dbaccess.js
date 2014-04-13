var mysql = require('mysql');

module.exports = {
    connection: function() {
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'mc536'
        });
        return connection;
    },
    query: function() {
        var connection = this.connection();
        connection.query.apply(connection, arguments);
    }
};