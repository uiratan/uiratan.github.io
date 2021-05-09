/* obter uma referência ao título e armazená-lo em uma variável chamada meuCabecalho. Isso é muito parecido ao que fizemos usando seletores CSS. Quando queremos fazer algo em um elemento, primeiro você precisa selecioná-lo. */

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

// armazena uma referência ao seu elemento <img> na variável minhaImagem
let minhaImagem = document.querySelector('img');


// faz a propriedade do manipulador de evento onclick dessa variável igual a uma função sem nome (uma função "anônima")
minhaImagem.onclick = function() {
    // recupera o valor do atributo src da imagem
    let meuSrc = minhaImagem.getAttribute('src');
    if (meuSrc === 'img/boomer-banner.jpg') {
        minhaImagem.setAttribute('src', 'img/cringe.jpg');
    } else {
        minhaImagem.setAttribute('src', 'img/boomer-banner.jpg');
    }
}

meuBotao.onclick = function() { defineNomeUsuario(); }


// usa o operador de negação (NÃO lógico representado pelo !) para checar se o dado nome existe - se não existir, a função defineNomeUsuario() é executada para criá-lo.
if (!localStorage.getItem('nome')) {
    defineNomeUsuario();
} else {
    // recuperamos o nome guardado usando getItem()    
    let nomeGuardado = localStorage.getItem('nome');

    // associamos o textContent do título a uma string, mais o nome do usuário, como fizemos dentro de defineNomeUsuario()
    meuCabecalho.textContent = 'Tiozão ' + nomeGuardado;
}

function defineNomeUsuario() {
    // traz uma caixa de diálogo assim como alert() faz e pede ao usuário para inserir algum dado e guarda os dados em uma variável quando o botão OK é pressionado
    let meuNome = prompt('Por favor, digite seu nome.');

    // chamamos uma API denominada localStorage, o que nos permite guardar dados no navegador para usarmos mais tarde. a função setItem() de localStorage para criar e guardar um item de dado chamado 'nome', definindo seu valor para a variável meuNome que contém o nome que o usuário digitou
    localStorage.setItem('nome', meuNome);

    // definimos o textContent do título como uma string, mais o nome recém-armazenado do usuário.
    meuCabecalho.textContent = 'Tiozão ' + meuNome;
}