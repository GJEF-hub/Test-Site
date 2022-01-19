// assign variables for navbar menu toggle
const header = document.querySelector("header");
const mobileMenuBtn = document.getElementById("mobile-open-menu");
const nav = document.querySelector("nav");
const mobileExitBtn = document.getElementById("mobile-close-menu");

// Opens the mobile menu when clicked on
mobileMenuBtn.addEventListener("click", () => {
  nav.classList.add("nav-menu-button");
});

// Hides the mobile menu when clicked on
mobileExitBtn.addEventListener("click", () => {
  nav.classList.remove("nav-menu-button");
});
