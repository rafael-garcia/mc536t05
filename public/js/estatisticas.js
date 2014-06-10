google.load("visualization", "1", { packages: ["corechart"] });

$(function() {
	var Visualizacao = {
		elemento: function() {
			return $('.visualizacao .chart')[0];
		},
		grafico: function() {
			if (!this._grafico) {
				var elemento = this.elemento();
				this._grafico = new google.visualization.ColumnChart(elemento);
			}
			return this._grafico;
		}
	};

	var SelecaoDeArtistas = {
		seletor: function() {
			if (!this._seletor) {
				this._seletor = $('<select />').addClass('artistas');
			}
			return this._seletor;
		},
		preencherSeletor: function(artistas) {
			var selecao = this;
			artistas.forEach(function(resultado) {
				var opcao = $('<option />')
				opcao.text(resultado.nomeCorrigido);
				opcao.val(resultado.nomeOriginal);
				selecao.seletor().append(opcao);
			});
		},
		adicionarSeletor: function() {
			$('.visualizacao').prepend(this.seletor());
		},
		associarEvento: function(evento) {
			this.seletor().change(evento);
		},
		removerSeletor: function() {
			this.seletor().empty();
			this.seletor().remove();
		}
	}

	var Backend = {
		artistas: function(callback) {
			$.getJSON('/artistas/listarNomes', callback);
		}
	};

	var OpcoesDefault = {
		animacao: {
			duration: 600,
			easing: 'out'
		},
		eixoVertical: {
			minValue: 0,
			maxValue: 5			
		},
		altura: 500
	}

	var MediaPorArtista = {
		dados: function(nomeOriginal, nomeCorrigido, callback) {
			$.getJSON('/estatisticas/artistas/media/' + nomeOriginal, function(estatistica) {
				var data = google.visualization.arrayToDataTable([
					['Artista', 'Rating médio'],
					[nomeCorrigido, estatistica.media]
				]);
				callback(data);
			});
		},
		options: {
			title: $('menu .mediaPorArtista').text(),
			animation: OpcoesDefault.animacao,
			vAxis: OpcoesDefault.eixoVertical,
			height: OpcoesDefault.altura
		},
		desenhar: function() {
			var nomeOriginal = SelecaoDeArtistas.seletor().val();
			var nomeCorrigido = SelecaoDeArtistas.seletor().find(':selected').text();
			var self = this;
			self.dados(nomeOriginal, nomeCorrigido, function(data) {
				Visualizacao.grafico().draw(data, self.options);
			});
		}
	};

	var DesvioPadraoPorArtista = {
		dados: function(nomeOriginal, nomeCorrigido, callback) {
			$.getJSON('/estatisticas/artistas/desvioPadrao/' + nomeOriginal, function(estatistica) {
				var data = google.visualization.arrayToDataTable([
					['Artista', 'Desvio padrão'],
					[nomeCorrigido, estatistica.desvio_padrao]
				]);
				callback(data);
			});
		},
		options: {
			title: $('menu .desvioPadraoPorArtista').text(),
			animation: OpcoesDefault.animacao,
			vAxis: {
				minValue: 0,
				maxValue: 2
			},
			height: OpcoesDefault.altura
		},
		desenhar: function() {
			var nomeOriginal = SelecaoDeArtistas.seletor().val();
			var nomeCorrigido = SelecaoDeArtistas.seletor().find(':selected').text();
			var self = this;
			self.dados(nomeOriginal, nomeCorrigido, function(data) {
				Visualizacao.grafico().draw(data, self.options);
			});			
		}
	};

	var MaioresRatings = {
		dados: function(callback) {
			$.getJSON('/estatisticas/artistas/maioresMedias', function(estatisticas) {
				var mapeamento = estatisticas.map(function(estatistica) {
					return [estatistica.artista, estatistica.rating_medio];
				});
				mapeamento.unshift(['Artista', 'Rating médio']);
				var data = google.visualization.arrayToDataTable(mapeamento);
				callback(data);
			});
		},
		options: {
			title: $('menu .maioresRatings').text(),
			animation: OpcoesDefault.animacao,
			vAxis: OpcoesDefault.eixoVertical,
			height: OpcoesDefault.altura,
		},
		desenhar: function() {
			var self = this;
			this.dados(function(data) {
				Visualizacao.grafico().draw(data, self.options);
			});
		}
	};

	var MaioresRatingsComCurtidas = {
		dados: function(callback) {
			$.getJSON('/estatisticas/artistas/maioresMediasComMultiplasCurtidas', function(estatisticas) {
				var mapeamento = estatisticas.map(function(estatistica) {
					return [estatistica.artista, estatistica.rating_medio];
				});
				mapeamento.unshift(['Artista', 'Rating médio']);
				var data = google.visualization.arrayToDataTable(mapeamento);
				callback(data);
			});
		},
		options: {
			title: $('menu .maioresRatingsComCurtidas').text(),
			animation: OpcoesDefault.animacao,
			vAxis: OpcoesDefault.eixoVertical,
			height: OpcoesDefault.altura,
		},
		desenhar: function() {
			var self = this;
			this.dados(function(data) {
				Visualizacao.grafico().draw(data, self.options);
			});
		}
	};

	var Estatisticas = {
		mediaPorArtista: function() {
			Backend.artistas(function(artistas) {
				SelecaoDeArtistas.removerSeletor();
				SelecaoDeArtistas.preencherSeletor(artistas);
				SelecaoDeArtistas.adicionarSeletor();
				SelecaoDeArtistas.associarEvento(function() {
					MediaPorArtista.desenhar();
				});
				MediaPorArtista.desenhar();
			});
		},

		desvioPadraoPorArtista: function() {
			Backend.artistas(function(artistas) {
				SelecaoDeArtistas.removerSeletor();
				SelecaoDeArtistas.preencherSeletor(artistas);
				SelecaoDeArtistas.adicionarSeletor();
				SelecaoDeArtistas.associarEvento(function() {
					DesvioPadraoPorArtista.desenhar();
				});
				DesvioPadraoPorArtista.desenhar();
			});
		},

		maioresRatings: function() {
			SelecaoDeArtistas.removerSeletor();
			MaioresRatings.desenhar();
		},

		maioresRatingsComCurtidas: function() {
			SelecaoDeArtistas.removerSeletor();
			MaioresRatingsComCurtidas.desenhar();
		}
	};

	google.setOnLoadCallback(function() {
		$('menu .mediaPorArtista').click(Estatisticas.mediaPorArtista);
		$('menu .desvioPadraoPorArtista').click(Estatisticas.desvioPadraoPorArtista);
		$('menu .maioresRatings').click(Estatisticas.maioresRatings);
		$('menu .maioresRatingsComCurtidas').click(Estatisticas.maioresRatingsComCurtidas);
	});
});