document.addEventListener("DOMContentLoaded", function () {
  const botaoVoltar = document.querySelector(".button-voltar");
  const botaoContinuar = document.querySelector(".button-vamos");
  const botaoAjuda = document.querySelector(".button-nao-sei");

  if (botaoVoltar) {
      botaoVoltar.addEventListener("click", function () {
          window.history.back();
      });
  }

  if (botaoContinuar) {
      botaoContinuar.addEventListener("click", function () {
          // Reproduz o som ao clicar no botão Continuar
          var somContinuar = document.getElementById('som_click');
          somContinuar.play();

          // Redireciona para a próxima página
          window.location.href = "tela_escolha_equipamentos.html";;
      });
  }

  if (botaoAjuda) {
      botaoAjuda.addEventListener("click", function () {
          window.location.href = "orientacoes.html";
      });
  }
});
