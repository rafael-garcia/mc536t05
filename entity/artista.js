var Cidade = require("./cidade");

module.exports = function Artista(mbid, nome, cidade) {
	this.mbid = mbid ? mbid : null;
	this.nome = nome ? nome : null;
	this.cidade = cidade ? cidade : new Cidade();

	this.diff = function(other) {
		return this.mbid != other.mbid || 
			this.nome != other.nome ||
			ths.cidade.diff(other.cidade);
	}
};