const burgurButton = document.getElementById("burgerButton");
const navListContainer = document.getElementById("navListContainer");
const nav = document.getElementById("nav");
let isMenuOpen = false;

burgurButton.addEventListener("click", () => {
  if (!isMenuOpen) {
    isMenuOpen = true;
    nav.classList.add("nav-container-open");
  } else {
    isMenuOpen = false;
    nav.classList.remove("nav-container-open");
  }
});

navListContainer.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "a") {
    isMenuOpen = false;
    nav.classList.remove("nav-container-open");
  }
});
