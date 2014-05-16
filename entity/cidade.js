var Pais = require("./pais");

module.exports = function Cidade(nome, paisId) {
	this.nome = nome ? nome : null;
	this.pais = new Pais();

	if (paisId) {
		this.pais.id = paisId;
	}

	this.diff = function(other) {
		return this.nome != other.nome;
	}
};