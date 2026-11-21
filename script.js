const root = document.documentElement;
const toggle = document.getElementById("themeToggle");

function isDark() {
  return root.dataset.theme === "dark";
}

toggle.addEventListener("click", function () {
  root.dataset.theme = isDark() ? "light" : "dark";
  toggle.textContent = isDark() ? "Modo claro" : "Modo oscuro";
});
