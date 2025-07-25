alert ("fichier lié");
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector('.btnEnvoyer');
  if (btn) {
    btn.addEventListener('click', function () {
      alert("Votre message a bien été envoyé !");
      window.location.href = "http://localhost:52330/pages/index.html"; // ou ton URL
    });
  }
});


console.log("Contact.js loaded successfully");