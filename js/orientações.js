document.addEventListener("DOMContentLoaded", function() {
  const botaoVoltar = document.querySelector("button");

  if (botaoVoltar) {
    botaoVoltar.addEventListener("click", function () {
      window.history.back();
    });
  }
});
