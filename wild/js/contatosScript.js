function enviarComentarios() {
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let comentario = document.getElementById("mensagem").value;

 
  if (nome.trim() === "" || email.trim() === "" || comentario.trim() === "") {
      alert("Por favor, preencha todos os campos.");
      return;
  }

  
  let nomeRegex = /^[a-zA-Z]+$/;
  if (!nomeRegex.test(nome)) {
      alert("O campo de nome deve conter apenas letras.");
      return;
  }

 
  if (email.length < 4) {
      alert("O campo de e-mail deve ter pelo menos 8 caracteres.");
      return;
  }


  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      alert("Por favor, insira um endereço de e-mail válido.");
      return;
  }

  
  let comentarioRegex = /^[a-zA-Z\s]+$/;
  if (!comentarioRegex.test(comentario)) {
      alert("O campo de comentário deve conter apenas letras.");
      return;
  }

 
  let palavrasOfensivas = ["merda", "bosta", "foda-se", "caralho", "desgraça", "viado"];


  for (let palavra of palavrasOfensivas) {
      if (comentario.toLowerCase().includes(palavra.toLowerCase())) {
          alert("Por favor, evite usar linguagem ofensiva.");
          return;
      }
  }

  
  sessionStorage.setItem("nome", nome);
  window.location.href = "comentarios.html";
}

document.querySelector("#formInfs").addEventListener("submit", function(event) {
  event.preventDefault();
  enviarComentarios();
});