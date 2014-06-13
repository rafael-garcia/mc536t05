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

router.get('/artistas/maisPopulares', function(req, res) {
	var query = 'SELECT artista, count(artista) AS popularidade FROM curtida GROUP BY artista ORDER BY popularidade DESC LIMIT ?';
	var limit = 10;
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

router.get('/artistas/maiorVariabilidade', function(req, res) {
	var query = 'SELECT artista, std(nota) as variabilidade FROM curtida GROUP BY artista HAVING count(artista) > 1 ORDER BY variabilidade DESC LIMIT ?';
	var limit = 10;
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

router.get('/generos/maisPopulares', function(req, res) {
	var query = 'SELECT GM.nome, count(GA.genero_id) AS popularidade FROM genero_artista GA, genero_musical GM WHERE GA.genero_id = GM.id GROUP BY GA.genero_id ORDER BY popularidade DESC LIMIT ?';
	var limit = 5;
	var params = [limit];
	dbaccess.query(query, params, function(err, result) {
		if (err) {
			res.send(err);
		} else {
			res.send(result);
		}
	});
});

router.get('/usuarios/porNumeroDeCurtidas', function(req, res) {
	var query = 'SELECT curtidas, count(*) AS quantos_usuarios FROM (SELECT count(usuario) AS curtidas FROM curtida GROUP BY usuario) AS contagem_curtidas GROUP BY curtidas ORDER BY curtidas';
	dbaccess.query(query, function(err, result) {
		if (err) {
			res.send(err);
		} else {
			res.send(result);
		}
	});
});

module.exports = router;
