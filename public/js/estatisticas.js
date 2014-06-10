google.load("visualization", "1", { packages: ["corechart"] });

$(function() {
	var Estatisticas = {
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

	var mediaPorArtista = function() {
		$.getJSON('/artistas/listarNomes', function(resultados) {
			var seletor = $('<select />').addClass('artistas');
			resultados.forEach(function(resultado) {
				var opcao = $('<option />')
				opcao.text(resultado.nomeCorrigido);
				opcao.val(resultado.nomeOriginal);
				seletor.append(opcao);
			});
			$('.visualizacao').prepend(seletor);
			$('select.artistas').change(function() {
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

					Estatisticas.grafico().draw(data, options);
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