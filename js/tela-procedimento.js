document.addEventListener("DOMContentLoaded", function () {
  let contadorCliques = 0;
  // Variável global para controlar o índice da mensagem atual
  var indiceMensagemAtual = 0;



  // Array de mensagens
  var mensagens = [
    "Coloque o bebê em seu antebraço com a cabeça virada para baixo",
    "Deixe o bebê em um ângulo direcionando sua cabeça para baixo para facilitar a exteriorização do corpo estranho.",
    "Agora que ja colocamos o bebe na posição correta vamos realizara a tapotagem!."
    // Adicione quantas mensagens desejar
  ];

  // Função para avançar a conversa
  function avancarConversa() {
    // Trocar a mensagem do bot
    var mensagemBot = document.getElementById('mensagemBot');
    var botaoAvancar = document.getElementById('botaoAvancar');

    if (indiceMensagemAtual < mensagens.length) {
      // Exibir próxima mensagem
      mensagemBot.textContent = mensagens[indiceMensagemAtual];
      indiceMensagemAtual++;

      // Verificar se é a última mensagem
      if (indiceMensagemAtual === mensagens.length) {
        // Se for a última mensagem, trocar o botão para "Realizar tapotagem"
        botaoAvancar.textContent = "Realizar tapotagem";
        botaoAvancar.setAttribute("onclick", "realizarTapotagem()");
        document.getElementById('botaoFinalizar').style.display = 'inline-block'; // Mostra o botão Finalizar
      }
    }
  }

  function finalizarTapotagem() {
    var mensagemResultado = document.getElementById('mensagemResultado');
    var textoResultado = document.getElementById('textoResultado');

    if (contadorCliques === 5) {
      document.getElementById('som_vitoria').play();
      mensagemResultado.style.display = 'block'
      textoResultado.textContent = "Parabéns! Você realizou a tapotagem com sucesso, vamos para o proximo procedimento!";
      mensagemResultado.style.display = 'block';
      setTimeout(function () {
        window.location.href = "tela_procedimento2.html";
      }, 3000);
    } else {
      document.getElementById('som_derrota').play();
      textoResultado.textContent = "Ops! Parece que você não fez a quantidade correta de tapotagens. Por favor, tente novamente.";
      mensagemResultado.style.display = 'block';
      setTimeout(function () {
        window.location.href = "tela_derrota.html";
      }, 3000);
    }
  }



  window.finalizarTapotagem = finalizarTapotagem;
  window.avancarConversa = avancarConversa;


  function realizarTapotagem() {
    contadorCliques++;

    // Atualizar o elemento na página para exibir o contador atualizado
    var contadorElemento = document.getElementById('contador');
    contadorElemento.textContent = contadorCliques;

    // Efeito de pulsação
    var balaoConversa = document.getElementById('balaoConversa');
    balaoConversa.classList.add('pulsating');

    var somPulseHeart = document.getElementById('som_pulse_heart');
    somPulseHeart.play();

    // Remove a classe de pulsação após um período de tempo
    setTimeout(function () {
      balaoConversa.classList.remove('pulsating');
    }, 500); // Ajuste o tempo conforme necessário
  }

  // Adicione a função ao escopo global para ser chamada pelo botão
  window.realizarTapotagem = realizarTapotagem;


  const botaoVoltar = document.querySelector(".button-voltar");
  if (botaoVoltar) {
    botaoVoltar.addEventListener("click", function () {
      window.history.back();
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
