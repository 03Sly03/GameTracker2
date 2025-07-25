alert("fichier lié");

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector('#btnEnvoyer');
  
  if (btn) {
    btn.addEventListener('click', function (event) {
      event.preventDefault(); // Empêche le comportement par défaut du bouton
      alert("Votre message a bien été envoyé !");
      window.location.href = "index.html"; 
    });
  } else {
    console.warn("⚠️ Le message n'a pas été envoyé.");
  }
});
