const d = document,
  oscuro = "rgb(20, 20, 20)",
  claro = "rgb(250, 250, 250)";

  
  export function darkButton() {
  document.documentElement.style.setProperty("--color-fondo",claro);
  document.documentElement.style.setProperty("--color-texto",oscuro);

  const $body = document.querySelector("body"),
    $dark = d.createElement("button");
    
  $dark.classList.add("dark-mode");
  $dark.textContent = "🌙";
  $body.insertAdjacentElement("afterbegin", $dark);
}

export function darkMode() {
  const $selectors = d.querySelectorAll(".light"),
    $button = d.querySelector(".dark-mode"),
    isactive = localStorage.getItem("darkmode") || 0,
    moon = "🌙",
    sun = "☀️";

  const darkactive = function () {
      $selectors.forEach((el) => {
        el.classList.add("dark");
      });
      $button.textContent = sun;
      localStorage.setItem("darkmode", 1);
    },
    light = function () {
      $selectors.forEach((el) => {
        el.classList.remove("dark");
      });
      $button.textContent = moon;
      localStorage.setItem("darkmode", 0);
    };
  //este if es para comprobar si quedo activado en memoria
  if (isactive === "1") darkactive();

  d.addEventListener("click", (e) => {
    if (e.target.matches(".dark-mode") || e.target.matches(`.dark-mode *`)) {
      if ($button.textContent === moon) {
        darkactive();
      } else {
        light();
      }
    }
  });
}
