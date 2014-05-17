module.exports = function Pais(nome) {
	this.id = null;
	this.nome = nome ? nome : null;

	Pais.prototype.diff = function(other) {
		return this.nome != other.nome;
	};
};