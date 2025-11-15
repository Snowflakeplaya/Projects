document.addEventListener("DOMContentLoaded", () => {
  
  const hamburgerButton = document.getElementById("hamburger-button");
  const navMenu = document.getElementById("nav-menu");

  if (hamburgerButton && navMenu) {
    hamburgerButton.addEventListener("click", () => {
      navMenu.classList.toggle("is-active");

      hamburgerButton.classList.toggle("is-active"); /*Toggle hamburger animation */
    });
  }
});