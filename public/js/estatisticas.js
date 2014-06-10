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
		}		
	};

	var Estatisticas = {
		mediaPorArtista: function() {
			Backend.artistas(function(artistas) {
				SelecaoDeArtistas.removerSeletor();
				SelecaoDeArtistas.preencherSeletor(artistas);
				SelecaoDeArtistas.adicionarSeletor();
				SelecaoDeArtistas.associarEvento(function() {
					var nomeOriginal = $(this).val();
					var nomeCorrigido = $(this).find(':selected').text();
					MediaPorArtista.dados(nomeOriginal, nomeCorrigido, function(data) {
						Visualizacao.grafico().draw(data, MediaPorArtista.options);
					});
				});
			});
		},

		desvioPadraoPorArtista: function() {
			Backend.artistas(function(artistas) {
				SelecaoDeArtistas.removerSeletor();
				SelecaoDeArtistas.preencherSeletor(artistas);
				SelecaoDeArtistas.adicionarSeletor();
				SelecaoDeArtistas.associarEvento(function() {
					var nomeOriginal = $(this).val();
					var nomeCorrigido = $(this).find(':selected').text();
					DesvioPadraoPorArtista.dados(nomeOriginal, nomeCorrigido, function(data) {
						Visualizacao.grafico().draw(data, DesvioPadraoPorArtista.options);
					});
				});
			});
		},

		maioresRatings: function() {
			SelecaoDeArtistas.removerSeletor();
			MaioresRatings.dados(function(data) {
				Visualizacao.grafico().draw(data, MaioresRatings.options)
			});
		}
	};

	google.setOnLoadCallback(function() {
		$('menu .mediaPorArtista').click(Estatisticas.mediaPorArtista);
		$('menu .desvioPadraoPorArtista').click(Estatisticas.desvioPadraoPorArtista);
		$('menu .maioresRatings').click(Estatisticas.maioresRatings);
	});
});