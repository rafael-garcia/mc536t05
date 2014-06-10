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
		}
	}

	var Backend = {
		artistas: function(callback) {
			$.getJSON('/artistas/listarNomes', callback);
		}
	};

	var mediaPorArtista = function() {
		Backend.artistas(function(artistas) {
			SelecaoDeArtistas.preencherSeletor(artistas);
			SelecaoDeArtistas.adicionarSeletor();
			SelecaoDeArtistas.seletor().change(function() {
				var artista = $(this).val();
				$.getJSON('/estatisticas/artistas/media/' + artista, function(estatistica) {
					var data = google.visualization.arrayToDataTable([
						['Artista', 'Media'],
						[$(this).text(), estatistica.media]
					]);

					var options = {
						title: $('menu .mediaPorArtista').text(),
						animation: {
							duration: 600,
							easing: 'out'
						},
						vAxis: {
							minValue: 0,
							maxValue: 5
						}
					};

					Visualizacao.grafico().draw(data, options);
				});
			});
		});
	};

	var desvioPadraoPorArtista = function() {
		alert('desvio');
	};

	google.setOnLoadCallback(function() {
		$('menu .mediaPorArtista').click(mediaPorArtista);
		$('menu .desvioPadraoPorArtista').click(desvioPadraoPorArtista);
	});
});