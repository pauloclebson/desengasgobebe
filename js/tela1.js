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
      var somContinuar = document.getElementById('som_click');
      somContinuar.play();
      avancarConversa(); // Chama a função para avançar a conversa
    });
  }

  if (botaoAjuda) {
    botaoAjuda.addEventListener("click", function () {
      window.location.href = "orientacoes.html";
    });
  }

  var nomeLogin = localStorage.getItem("username");
  console.log("Nome de login recuperado do Local Storage:", nomeLogin);

  if (nomeLogin) {
    document.getElementById("nomeUsuario").textContent = nomeLogin;
    console.log("Nome de login definido no elemento HTML:", nomeLogin);
  } else {
    console.log("Nome de login não encontrado no Local Storage.");
  }

  var mensagens = [
    "Estou com uma situação de atendimento de primeiros socorros que só você poderá me ajudar!",
    "Caso esteja apto, clique em 'Vamos' ou se ainda estiver com dúvidas clique em 'Ajuda!'"
  ];

  var indiceMensagemAtual = 0;

  function avancarConversa() {
    var mensagemBot = document.getElementById('mensagemBot');
    var botaoAvancar = document.querySelector('.button-vamos');

    if (indiceMensagemAtual < mensagens.length) {
      mensagemBot.textContent = mensagens[indiceMensagemAtual];
      indiceMensagemAtual++;

      if (indiceMensagemAtual === mensagens.length) {
        botaoAvancar.textContent = "Vamos";
        botaoAjuda.style.display = "inline"; // Torna o botão de ajuda visível
        botaoAvancar.addEventListener("click", function() {
          var somContinuar = document.getElementById('som_click');
          somContinuar.play();
          window.location.href = "tela2.html";
        });
      }
    }
  }
});
