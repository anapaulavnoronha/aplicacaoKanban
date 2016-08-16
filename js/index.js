//criar cartao
var numCartoes = $('.cartao').length;
$('#adicionarCartao').click(criaCartao);

function criaCartao() {

    numCartoes++;

    var novoConteudo = $('<textarea>').addClass('cartao-conteudo').attr('placeholder', 'Digite aqui...').attr('contenteditable', true);

    var botaoRemove = $('<button>').addClass('remove-cartao').attr('data-cartao', 'cartao_' + numCartoes);
    botaoRemove.click(removeCartao);

    var novoCartao = $('<div>').addClass('cartao');

    novoCartao.append(novoConteudo);
    novoCartao.append(botaoRemove);
    novoCartao.attr('id', 'cartao_' + numCartoes);

    novoCartao.prependTo('.coluna-toDo');
}

/*$('.cartao').dblclick(editaCartao);

function editaCartao() {
    var conteudoEditavel = $('<p>').attr('contenteditable', true);
}*/
/*.attr('contenteditable', true)*/

//remover cartao
$('.remove-cartao').click(removeCartao);

function removeCartao() {
    var idCartao = $(this).data('cartao');
    var cartao = $('#' + idCartao);

    cartao.addClass('cartao--some');

    setTimeout(function () {
        cartao.remove();
    }, 500);
}

$('.coluna-cartoes').sortable({
    connectWith: ".coluna-cartoes",
    cancel: '[contenteditable=true]'
})