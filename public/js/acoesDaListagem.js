(function($) {
    AcaoDeApagar = {
        executar: function(botao) {
            var url = $(botao).attr('data-url');
            var acao = this;
            $.ajax({
                url: url,
                type: 'DELETE',
                success: function() {
                    acao.concluir(botao);
                }
            });
        },
        concluir: function(botao) {
            $(botao).parents('.linhaDeDados').remove();
        }
    };

    GerenciadorDeAcoes = {
        amarrarAcoes: function() {
            var acoes = $('.acao');
            var acoesDeApagar = acoes.filter('.apagar');
            acoesDeApagar.click(function() {
                AcaoDeApagar.executar(this);
            });
        }
    };
})(jQuery);

$(function() {
    GerenciadorDeAcoes.amarrarAcoes();
});