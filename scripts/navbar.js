/*quand le html est entierement chargé*/
document.addEventListener("DOMContentLoaded", () => {
  /* on recupere les 2 elements par leur id et on stocke dans une variable*/
  const burger = document.getElementById("menuBurger");
  const dropdown = document.getElementById("dropdown");
  /* et si ils existent bien*/
  if (burger && dropdown) {
    /*on modifie la classe css qui devient active*/
    burger.addEventListener("click", () => {
      dropdown.classList.toggle("active");
    });
  }
});