// Dark mode toggle
const toggleBtn = document.getElementById("modeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Smooth scrolling
const navLinks = document.querySelectorAll(".menu a[href^='#']");
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Scroll animations using AOS
window.addEventListener("DOMContentLoaded", () => {
  const aosScript = document.createElement("script");
  aosScript.src = "https://unpkg.com/aos@2.3.1/dist/aos.js";
  aosScript.onload = () => AOS.init({ once: true });
  document.body.appendChild(aosScript);
});
