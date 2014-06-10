google.load("visualization", "1", {packages:["corechart"]});

$(function() {
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

					// FIXME!!!!
					window.chart.draw(data, options);			
				});
			});
		});
	};

	var desvioPadraoPorArtista = function() {
		alert('desvio');
	};

	google.setOnLoadCallback(function() {
		var chartElement = $('.visualizacao .chart')[0];
		// FIXME!!!!
		window.chart = new google.visualization.ColumnChart(chartElement);
		$('menu .mediaPorArtista').click(mediaPorArtista);
		$('menu .desvioPadraoPorArtista').click(desvioPadraoPorArtista);
	});
});