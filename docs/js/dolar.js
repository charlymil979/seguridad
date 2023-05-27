const d=document

const $dolar = d.querySelector(".dolar");
const $cierre = d.querySelector(".cierre");
const $mostrar = d.querySelector("#imgdolar")

function dolar() {
  d.addEventListener('click', e=>{
    // console.log(e.target)
    if(e.target.matches(".cierre")){
      e.preventDefault();
      document.body.removeChild($iframe)
    }
    if (e.target.matches("#imgdolar")) {
      e.preventDefault();
      $iframe=document.createElement("div")
      $iframe.classList.add("dolar")
      $iframe.innerHTML = `
      <button class="cierre">x</button>
      <iframe
        style="width:320px;height:260px;border-radius:10px;box-shadow:2px 4px 4px rgb(0 0 0 / 25%);display:flex;justify-content:center;border:1px solid #bcbcbc"
        src="https://dolarhoy.com/i/cotizaciones/dolar-bancos-y-casas-de-cambio" frameborder="0"></iframe>
      <p>Los precios son a valor dolar oficial</p>
    `;
      document.body.appendChild($iframe);
    }
  })
}
dolar()