var express = require('express');
var dbaccess = require('../dbaccess');

var router = express.Router();
router.get('/artistas/media/:artista', function(req, res) {
	var query = 'SELECT avg(nota) FROM curtida WHERE artista = ?';
	var params = [req.params.artista];
    dbaccess.query(query, params, function(err, result) {
		if (err) {
			res.send(err);
		} else {
			res.send(result);
		}
	});	
});
module.exports = router;
