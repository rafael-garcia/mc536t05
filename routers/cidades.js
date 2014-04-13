var express = require('express');
var dbaccess = require('../dbaccess');
var router = express.Router();

router.get('/', function(req, res) {
    dbaccess.query('SELECT * FROM cidade', function(err, rows, fields) {
        res.send(rows);
    });
});

router.post('/', function(req, res) {
    
});

module.exports = router;