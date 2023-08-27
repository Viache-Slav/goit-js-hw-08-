const body = document.querySelector("body");
const toggle = document.querySelector(".toggle");

toggleDarkMode(body, toggle);

  export function toggleDarkMode(body, toggle) {
    const darkMode = localStorage.getItem("dark-mode");
    if (darkMode === "true") { 
        body.classList.add("dark-mode"); 
    }
    toggle.addEventListener("click", function () { 
        body.classList.toggle("dark-mode");
        const isDarkMode = body.classList.contains("dark-mode");
        localStorage.setItem("dark-mode", isDarkMode);
    }); 
}