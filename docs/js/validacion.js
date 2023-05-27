const d = document;

export function formValidation() {
  const $form = d.querySelector(".form"),
    $inputs = d.querySelectorAll(".form [required]"),
    $mensaje = d.createElement("div"),
    $enviando = d.createElement("div");

  let regexp = [];

  $enviando.setAttribute(
    "style",
    "position: fixed; width: auto; top: 30%; left: 40%; background-color: rgba(173, 216, 240, 0.75); color: black; border-radius: 5%; font-weight: bold"
  );
  $enviando.textContent = "Enviando mensaje";

  $mensaje.setAttribute(
    "style",
    "display: flex;flex-wrap: wrap;position: fixed;height: 4rem;width: auto;top: 30%;left: 40%;background-color: rgba(0,0,255,0.75);color: white;border-radius: 5%;font-weight: bold;align-content: center;"
  );
  // console.log($inputs)
  // console.log($form.querySelectorAll("input[required]"));

  $inputs.forEach((input) => {
    input.pattern
      ? regexp.push(input.pattern)
      : regexp.push(input.dataset.pattern);

    const $span = d.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("form-error", "none");

    input.insertAdjacentElement("afterend", $span);
  });
  d.addEventListener("click", (e) => {
    if (e.target.matches(".form [type='submit']")) {
      let ok = 1;
      $inputs.forEach((input, i) => {
        let expresion = new RegExp(regexp[i]);
        if (!expresion.exec(input.value)) {
          d.getElementById(input.name).classList.add("is-active");
          ok--;
        } else {
          d.getElementById(input.name).classList.remove("is-active");
        }
      });
      if (ok !== 1) {
        e.preventDefault();
      }
    }
  });
  d.addEventListener("submit", (e) => {
    $form.insertAdjacentElement("afterbegin", $enviando);
    e.preventDefault();
    fetch("https://formsubmit.co/ajax/sitiobesafe@gmail.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        // console.log(json)
        $form
          .querySelectorAll("input[required]")
          .forEach((input) => (input.value = ""));
        $form
          .querySelectorAll("textarea")
          .forEach((input) => (input.value = ""));
        $mensaje.textContent = "Mensaje enviado";
        $form.removeChild($enviando);
        $form.insertAdjacentElement("afterbegin", $mensaje);
        setTimeout(() => {
          $form.removeChild($mensaje);
        }, 2000);
      })
      .catch((err) => {
        $mensaje.sttr("style", "background-color:rgba(200, 0, 0, 0.75)");
        $mensaje.textContent = "Hubo un error, intente nuevamente";
        $form.removeChild($enviando);
        $form.insertAdjacentElement("afterbegin", $mensaje);
        setTimeout(() => {
          $form.removeChild($mensaje);
        }, 2000);
      });
  });
}
