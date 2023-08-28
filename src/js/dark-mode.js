const body = document.querySelector("body");
const toggle = document.querySelector(".toggle");

const darkMode = localStorage.getItem("dark-mode");
if (darkMode && darkMode === "true") {
    body.classList.add("dark-mode");
  }
if (toggle) {
    toggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        const isDarkMode = body.classList.contains("dark-mode");
        localStorage.setItem("dark-mode", isDarkMode);
    });
  }