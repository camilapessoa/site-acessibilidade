document.addEventListener('DOMContentLoaded', function () {
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

    botaoDeAcessibilidade.addEventListener('click', function () {
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
        opcoesDeAcessibilidade.classList.toggle('mostra');

        // Atualização do valor do atributo aria-expanded
        const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
        botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado);
    });

    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const reiniciaFonteBotao = document.getElementById('reinicia-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    const alternaContraste = document.getElementById('alterna-contraste');

    let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

    reiniciaFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte = 1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

    diminuiFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

    alternaContraste.addEventListener('click', function () {
        document.body.classList.toggle('alto-contraste');
    });
});


ScrollReveal({ reset: false });
ScrollReveal().reveal('#home');
ScrollReveal().reveal('#tropicalia', { delay: 200 });
ScrollReveal().reveal('#galeria', { delay: 200 });
ScrollReveal().reveal('#contato', { delay: 200 });