document.addEventListener('DOMContentLoaded', function() {
    const botaoAcessibilidade = document.getElementById("botaoAcessibilidade");
    const opcoesAcessibilidade = document.getElementById("opcoesAcessibilidade");
    botaoAcessibilidade.addEventListener("click",function() {
        botaoAcessibilidade.classList.toggle("rotacao_acessibilidade");
        opcoesAcessibilidade.classList.toggle("apresenta-lista_acessibilidade");
    })

    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function() {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

    diminuiFonteBotao.addEventListener('click', function() {
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });


});
