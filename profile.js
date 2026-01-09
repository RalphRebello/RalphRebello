document.addEventListener("DOMContentLoaded", function () {
  const select = document.getElementById("theme-select");
  const linkTerminal = document.getElementById("theme-terminal");
  const linkDefault = document.getElementById("theme-default");

  function applyTheme(theme) {
    if (theme === "terminal") {
      linkTerminal.disabled = false;
      linkDefault.disabled = true;
    } else if (theme === "default") {
      linkTerminal.disabled = true;
      linkDefault.disabled = false;
    }
    localStorage.setItem("theme", theme);
  }

  const savedTheme = localStorage.getItem("theme") || "terminal";
  select.value = savedTheme;
  applyTheme(savedTheme);
  select.addEventListener("change", function () {
    applyTheme(select.value);
  });
});
