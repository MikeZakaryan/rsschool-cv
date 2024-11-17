const burgurButton = document.getElementById("burgerButton");
const nav = document.getElementById("nav");
let isMenuOpen = false;

burgurButton.addEventListener("click", () => {
  console.log("working");
  if (!isMenuOpen) {
    isMenuOpen = true;
    nav.classList.add("nav-container-open");
  } else {
    isMenuOpen = false;
    nav.classList.remove("nav-container-open");
  }
});
