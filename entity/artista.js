var Cidade = require("./cidade");

module.exports = function Artista(mbid, nomeArtistico, nomeVelho, cidade) {
	this.mbid = mbid ? mbid : null;
	this.nomeArtistico = nomeArtistico ? nomeArtistico : null;
    this.nomeVelho = nomeVelho ? nomeVelho : null;
	this.cidade = cidade ? cidade : new Cidade();

	Artista.prototype.diff = function(other) {
		return this.mbid != other.mbid || 
			this.nomeArtistico != other.nomeArtistico ||
			ths.cidade.diff(other.cidade);
	};
};