var util = require("util");
var dbaccess = require("./dbaccess");

module.exports = {
	listArtista: function(callback) {
		dbaccess.query('SELECT * FROM artista', callback);
	},
	
	searchCidade: function(cidade, callback) {
		var arr = [cidade.nome];
		dbaccess.query('SELECT * FROM cidade WHERE nome = ?', arr, callback);
	},
	insertCidade: function(cidade, callback) {
		var arr = [cidade.nome, cidade.pais.id];
		dbaccess.query('INSERT INTO cidade (nome, pais_id) VALUES (?,?)', arr, callback);
	},
	updateCidade: function(cidade, callback) {
		var arr = [cidade.nome, cidade.pais.id];
		dbaccess.query('UPDATE cidade SET nome = ? AND pais_id = ?', arr, callback);
	},
	
	searchPais: function(pais, callback) {
		var arr = [pais.nome];
		dbaccess.query('SELECT * FROM pais WHERE nome = ?', arr, callback);
	},
	insertPais: function(pais, callback) {
		var arr = [pais.nome];
		dbaccess.query('INSERT INTO pais (nome) VALUES (?)', arr, callback);
	},
	
	searchArtista: function(artista, callback) {
		var arr = [artista.mbid, artista.nomeArtistico];
		dbaccess.query('SELECT * FROM artista WHERE mb_id = ? OR nome_artistico = ?', arr, callback);
	},
	insertArtista: function(artista, callback) {
		var arr = [artista.mbid, artista.nomeArtistico, artista.cidade.nome];
		dbaccess.query('INSERT INTO artista (mb_id, nome_artistico, cidade) VALUES (?,?,?)', arr, callback);
	},
	updateArtistaById: function(artista, mbid, callback) {
		var arr = [artista.nomeArtistico, artista.cidade.nome, mbid];
		dbaccess.query('UPDATE artista SET nome_artistico = ? AND cidade = ? WHERE mb_id = ?', arr, callback);
	}
};