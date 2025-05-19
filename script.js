
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.createElement("button");
  toggle.textContent = "Toggle Theme";
  toggle.className = "theme-toggle";
  document.body.appendChild(toggle);

  toggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    document.documentElement.setAttribute(
      "data-theme",
      currentTheme === "dark" ? "light" : "dark"
    );
  });

  // Default theme
  document.documentElement.setAttribute("data-theme", "light");
});
