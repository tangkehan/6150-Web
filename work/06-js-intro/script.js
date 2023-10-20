"use script";

const menuButton = document.querySelector(".menu");
const dropdown = document.querySelector(".dropdown");

menuButton.addEventListener("click", () => {
    dropdown.classList.toggle("open");
});

