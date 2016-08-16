//criar cartao
var numCartoes = $('.cartao').length;
$('#adicionarCartao').click(criaCartao);

function criaCartao() {

    numCartoes++;

    var novoConteudo = $('<textarea>').addClass('cartao-conteudo').attr('placeholder', 'Digite aqui...').attr('contenteditable', true);

    var botaoRemove = $('<button>').addClass('remove-cartao').attr('data-cartao', 'cartao_' + numCartoes);
    botaoRemove.click(removeCartao);

    var botaoEdita = $('<button>').addClass('edita-cartao').attr('data-cartao', 'cartao_' + numCartoes);
    botaoEdita.click(abreDetalhaCartao);


    var novoCartao = $('<div>').addClass('cartao');

    novoCartao.append(novoConteudo);
    novoCartao.append(botaoRemove);
    novoCartao.append(botaoEdita);
    novoCartao.attr('id', 'cartao_' + numCartoes);

    novoCartao.prependTo('.coluna-toDo');


}

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
    connectWith: '.coluna-cartoes',
    cancel: '[contenteditable=true]'
})

//abre modal
/*$('.cartao').on('click', abreDetalhaCartao);*/
$('.edita-cartao').on('click', abreDetalhaCartao);

function abreDetalhaCartao() {
    console.log('oi');
    var divModal = document.querySelector('#modal')
    divModal.style.display = 'block';
}

//fecha modal
$('#botao-fecha-modal').on('click', fechaDetalhaCartao);

function fechaDetalhaCartao() {
    var divModal = document.querySelector('#modal');
    divModal.style.display = 'none';
}