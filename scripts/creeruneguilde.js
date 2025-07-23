document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formGuilde");

  if (!form) {
    console.error("Formulaire introuvable");
    return;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    //sauvegarder la guilde dans le fichier guildes.json

    alert("La guilde a bien été créée !");
    window.location.href = "myGuild.html";
  });
});
