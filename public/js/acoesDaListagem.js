(function($) {
    GerenciadorDeAcoes = {
        apagar: function(botao) {
            var url = $(botao).attr('data-url');
            $.ajax({
                url: url,
                type: 'DELETE',
                success: function() {
                    
                }
            });
        },
        amarrarAcoes: function() {
            var gerenciador = this;
            var acoes = $('.acao');
            var acoesDeApagar = acoes.filter('.apagar');
            acoesDeApagar.click(function() {
                gerenciador.apagar(this);
            });
        }
    };
})(jQuery);

$(function() {
    GerenciadorDeAcoes.amarrarAcoes();
});