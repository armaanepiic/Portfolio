
const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.onclick = () => {
  navLinks.classList.toggle("active");
};

const darkTheme = document.getElementById("dark-theme");
const body = document.body;

darkTheme.onclick = () => {
  body.classList.toggle("dark-theme"); // Toggle dark-theme class
};
