const d = document;

function carrusel() {
 
      const $foto = d.querySelectorAll(".carrusel-foto");
      // console.log($foto)
      let posic = 0;
      let maxPosic = $foto.length;
      setInterval(() => {
        $foto.forEach((foto) => {
          foto.classList.remove("foto-activa");
        });
        $foto[posic].classList.add("foto-activa");
        posic++;
        if (posic === maxPosic) {
          posic = 0;
        }
      }, 2000);
}
carrusel();
