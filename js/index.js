document.addEventListener("DOMContentLoaded", function() {
  // Função para redirecionar para jogar.html
  const redirectJogar = function() {
      window.location.href = "login.html";
  };

  // Função para redirecionar para idealizadores.html
  const redirectIdealizadores = function() {
      window.location.href = "idealizadores.html";
  };

  // Função para redirecionar para orientacoes.html
  const redirectOrientacoes = function() {
      window.location.href = "orientacoes.html";
  };

  const redirectVoltar = function() {
    window.location.href = "index.html";
  };

  const botaoVoltar = document.querySelector(".botaoVoltar");
  if (botaoVoltar) {
      botaoVoltar.addEventListener("click", redirectVoltar);
  }


  // Adiciona os eventos de clique às constantes
  document.querySelector(".buttonJogar").addEventListener("click", redirectJogar);
  document.querySelector(".buttonIdealizadores").addEventListener("click", redirectIdealizadores);
  document.querySelector(".buttonOrientacoes").addEventListener("click", redirectOrientacoes);

});
