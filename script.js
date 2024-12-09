
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

document.getElementById("download-cv").addEventListener("click", function () {
  // Google Drive direct download URL
  const cvUrl =
    "https://drive.google.com/file/d/1dim5rqUrCT3J3PL6A7kHnLp701-Zfqmc/view?usp=sharing";

  // Create a temporary <a> element to trigger the download
  const a = document.createElement("a");
  a.href = cvUrl;
  a.download = "resume.pdf"; // This is the name the file will be saved as
  a.click();
});


