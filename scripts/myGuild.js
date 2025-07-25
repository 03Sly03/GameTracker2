document.addEventListener("DOMContentLoaded", async () => {
  // 1. Vérifier que l'élément section existe
  const section = document.getElementById("guildeSection");
  if (!section) {
    console.error("Erreur: Élément #guildeSection introuvable");
    return;
  }

  try {
    // 2. Charger les données
    const response = await fetch("../data/guildes.json");
    if (!response.ok) throw new Error("Erreur de chargement du fichier JSON");

    const guildes = await response.json();
    if (!Array.isArray(guildes)) throw new Error("Format de données invalide");

    // 3. Affichage conditionnel
    if (guildes.length === 0) {
      section.className = "section-vide";
      section.innerHTML = `
        <h1>Ma Guilde</h1>
        <p>Vous n'avez pas encore de guilde</p>
        <button id="creerGuildeBtn">Créer ma guilde</button>
      `;
      const creerBtn = document.getElementById("creerGuildeBtn");
      if (creerBtn) {
        creerBtn.addEventListener("click", () => {
          window.location.href = "creeruneguilde.html";
        });
      }
    } else {
      const guilde = guildes[guildes.length - 1];
      section.className = ""; // Réinitialise la classe
      section.innerHTML = `
        <div class="guilde-container">
          <h1 class="guilde-nom">${guilde.nom}</h1>
          ${
            guilde.blason
              ? `<img src="${guilde.blason}" alt="Blason" class="guilde-blason">`
              : ""
          }
          <div class="guilde-infos">
            <p><strong>Description :</strong> ${guilde.description}</p>
            <p><strong>Objectif :</strong> ${guilde.objectif}</p>
            <p><strong>Style :</strong> ${guilde.style}</p>
          </div>
          <button id="btnSupprimer" class="btn-supprimer">Supprimer ma guilde</button>
        </div>
      `;

      // 4. Gestion du bouton supprimer avec vérification
      const btnSupprimer = document.getElementById("btnSupprimer");
      if (btnSupprimer) {
        btnSupprimer.addEventListener("click", () => {
          if (confirm("Voulez-vous vraiment supprimer cette guilde ?")) {
            guildes.pop();
            // Ici faudra sauvegarder les modifications
            console.log("Guilde supprimée (simulation)");
          }
        });
      }
    }
  } catch (error) {
    console.error("Erreur:", error);
    section.innerHTML = `
      <p class="error">Une erreur est survenue lors du chargement des données</p>
    `;
  }
});
