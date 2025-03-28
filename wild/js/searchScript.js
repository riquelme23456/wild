document.getElementById("search").addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
      event.preventDefault();
      
      console.log("Usuário pressionou Enter. Execute a busca aqui.");
      
  }
});