document.addEventListener("DOMContentLoaded", function() {
  const botaoVoltar = document.querySelector("button");

  if (botaoVoltar) {
    botaoVoltar.addEventListener("click", function () {
      window.history.back();
    });
  }

  const loginForm = document.querySelector('.login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const usernameInput = document.querySelector('#username');
      if (!usernameInput) {
        console.error("Elemento '.username' não encontrado.");
        return;
      }

      const username = usernameInput.value; // Pegando o valor do campo de entrada

      // Verificando se o valor do username é null ou vazio
      if (!username || username.trim() === '') {
        alert('Por favor, insira seu nome.');
        return;
      }

      // Armazenar o nome de usuário no localStorage
      localStorage.setItem('username', username.trim()); // Removendo espaços em branco extras

      // Redirecionar para a próxima página ou executar a ação desejada
      window.location.href = "tela1.html";
    });
  } else {
    console.error("Formulário de login não encontrado.");
  }
});
