var express = require('express');
var dbaccess = require('../dbaccess');

var router = express.Router();
router.get('/', function(req, res) {
	res.render('estatisticas/index');
});

router.get('/artistas/media/:artista', function(req, res) {
	var query = 'SELECT avg(nota) as media FROM curtida WHERE artista = ?';
	var params = [req.params.artista];
	dbaccess.query(query, params, function(err, result) {
		if (err) {
			res.send(err);
		} else {
			res.send(result[0]);
		}
	});	
});

router.get('/artistas/desvioPadrao/:artista', function(req, res) {
	var query = 'SELECT std(nota) as desvio_padrao FROM curtida WHERE artista = ?';
	var params = [req.params.artista];
	dbaccess.query(query, params, function(err, result) {
		if (err) {
			res.send(err);
		} else {
			res.send(result[0]);
		}
	});	
});

router.get('/artistas/maioresMedias', function(req, res) {
	var query = 'SELECT artista, avg(nota) as rating_medio FROM curtida GROUP BY artista ORDER BY rating_medio DESC LIMIT ?';
	var limit = 20;
	var params = [limit];
	dbaccess.query(query, params, function(err, result) {
		if (err) {
			res.send(err);
		} else {
			rows = result.map(function(row) {
			    var nome = row.artista;
			    nome = decodeURIComponent(nome);
			    nome = nome.replace(/_/g, ' ');
			    row.artista = nome;
			    return row;
			});
			res.send(rows);
		}
	});
});

router.get('/artistas/maioresMediasComMultiplasCurtidas', function(req, res) {
	var query = 'SELECT artista, avg(nota) as rating_medio FROM curtida GROUP BY artista HAVING count(artista) > 1 ORDER BY rating_medio DESC LIMIT ?';
	var limit = 20;
	var params = [limit];
	dbaccess.query(query, params, function(err, result) {
		if (err) {
			res.send(err);
		} else {
			res.send(result);
		}
	});
});

router.get('/artistas/maisPopulares', function(req, res) {
	var query = 'SELECT artista, count(artista) AS popularidade FROM curtida GROUP BY artista ORDER BY popularidade DESC LIMIT ?';
	var limit = 10;
	var params = [limit];
	dbaccess.query(query, params, function(err, result) {
		if (err) {
			res.send(err);
		} else {
			res.send(result);
		}
	});
});

router.get('/artistas/maiorVariabilidade', function(req, res) {
	var query = 'SELECT artista, std(nota) as desvio_padrao FROM curtida GROUP BY artista HAVING count(artista) > 1 ORDER BY desvio_padrao DESC LIMIT ?';
	var limit = 10;
	var params = [limit];
	dbaccess.query(query, params, function(err, result) {
		if (err) {
			res.send(err);
		} else {
			res.send(result);
		}
	});
});

module.exports = router;
