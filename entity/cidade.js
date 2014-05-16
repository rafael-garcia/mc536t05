var Pais = require("./pais");

module.exports = function Cidade(nome, pais) {
	this.nome = nome ? nome : null;
	this.pais = pais ? pais : new Pais();

	this.diff = function(other) {
		return this.nome != other.nome;
	}
};