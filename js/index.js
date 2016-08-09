$('#adicionarCartao').click(criaCartao);

function criaCartao() {

    var novoConteudo = $('<p>').addClass('cartao-conteudo').attr('contenteditable', true);

    var novoCartao = $('<div>').addClass('cartao');

    novoCartao.append(novoConteudo).appendTo('.toDo');
}