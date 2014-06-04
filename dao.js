var util = require("util");
var dbaccess = require("./dbaccess");
var mysql = require("mysql");

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
		dbaccess.query('UPDATE cidade SET nome = ?, pais_id = ?', arr, callback);
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
    searchArtistaById: function(mbid, callback) {
        var arr = [mbid];
        dbaccess.query('SELECT * FROM artista WHERE mb_id = ?', arr, callback);
    },
    searchArtistaByNome: function(nomeArtistico, callback) {
        var arr = [nomeArtistico];
        dbaccess.query('SELECT * FROM artista WHERE nome_artistico = ?', arr, callback);
    },
	insertArtista: function(artista, callback) {
		var arr = [artista.mbid, artista.nomeArtistico, artista.cidade.nome];
		dbaccess.query('INSERT INTO artista (mb_id, nome_artistico, cidade) VALUES (?,?,?)', arr, callback);
	},
	updateArtistaById: function(artista, mbid, callback) {
		var arr = [artista.nomeArtistico, artista.cidade.nome, mbid];
		dbaccess.query('UPDATE artista SET nome_artistico = ?, cidade = ? WHERE mb_id = ?', arr, callback);
	},
    updateArtistaByNome: function(artista, nomeAntigo, callback) {
        var arr = [artista.nomeArtistico, artista.cidade.nome, artista.mbid], whereEscapado = mysql.escape(nomeAntigo),
            statement = 'UPDATE artista SET nome_artistico = ?, cidade = ?, mb_id = ? WHERE nome_artistico = ' + whereEscapado;

        dbaccess.query(statement, arr, dbaccess.chainPattern(
            this.updateCurtidasByArtistaNome(artista, dbaccess.chainPattern(
                this.updateCantorByArtistaNome(artista, dbaccess.chainPattern(
                    this.updateBandaByArtistaNome(artista, callback)
                ))
            ))
        ));
    },
    updateCurtidasByArtistaNome: function(artista, callback) {
        var arr = [artista.nomeArtistico, artista.nomeVelho],
            statement = 'UPDATE curtida SET artista = ? WHERE artista = ?';
        dbaccess.query(statement, arr, callback);
    },
    updateCantorByArtistaNome: function(artista, callback) {
        var arr = [artista.nomeArtistico, artista.nomeVelho],
            statement = 'UPDATE cantor SET artista = ? WHERE artista = ?';
        dbaccess.query(statement, arr, callback);
    },
    updateBandaByArtistaNome: function(artista, callback) {
        var arr = [artista.nomeArtistico, artista.nomeVelho],
            statement = 'UPDATE banda SET artista = ? WHERE artista = ?';
        dbaccess.query(statement, arr, callback);
    }
};