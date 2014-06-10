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
		}
	}

	var MediaPorArtista = {
		dados: function(nomeOriginal, nomeCorrigido, callback) {
			$.getJSON('/estatisticas/artistas/media/' + nomeOriginal, function(estatistica) {
				var data = google.visualization.arrayToDataTable([
					['Artista', 'Media'],
					[nomeCorrigido, estatistica.media]
				]);
				callback(data);
			});
		},
		options: {
			title: $('menu .mediaPorArtista').text(),
			animation: OpcoesDefault.animacao,
			vAxis: OpcoesDefault.eixoVertical
		},
	};

	var DesvioPadraoPorArtista = {
		dados: function(nomeOriginal, nomeCorrigido, callback) {
			$.getJSON('/estatisticas/artistas/desvioPadrao/' + nomeOriginal, function(estatistica) {
				var data = google.visualization.arrayToDataTable([
					['Artista', 'Desvio padrao'],
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
			}
		}
	};

	var Estatisticas = {
		mediaPorArtista: function() {
			Backend.artistas(function(artistas) {
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
		}
	};

	google.setOnLoadCallback(function() {
		$('menu .mediaPorArtista').click(Estatisticas.mediaPorArtista);
		$('menu .desvioPadraoPorArtista').click(Estatisticas.desvioPadraoPorArtista);
	});
});