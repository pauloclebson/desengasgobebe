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
      window.location.href = "tela2.html";
    });
  }

  if (botaoAjuda) {
    botaoAjuda.addEventListener("click", function () {
      window.location.href = "orientacoes.html";
    });
  }

  // Recupera o nome de login do Local Storage
  var nomeLogin = localStorage.getItem("username");
  console.log("Nome de login recuperado do Local Storage:", nomeLogin);

  // Verifica se o nome de login foi armazenado
  if (nomeLogin) {
    // Define o nome de login no elemento HTML
    document.getElementById("nomeUsuario").textContent = nomeLogin;
    console.log("Nome de login definido no elemento HTML:", nomeLogin);
  } else {
    console.log("Nome de login não encontrado no Local Storage.");
  }
});
