
function scrollTopButton(){
   const $scrollButton = document.querySelectorAll(".subir");
   window.addEventListener(("scroll"),()=>{
      const scroll=scrollY;
   if (scroll > 250) {
    $scrollButton.forEach(boton =>{
      boton.classList.remove("hidden")})
     ;
   } else {
     $scrollButton.forEach((boton) => {
       boton.classList.add("hidden");
     });
   }
   //Recomendado, en vez de scrollY, pageYoffset
   })
   d.addEventListener("click",(e)=>{
      if (e.target.matches(".subir")){
         //literalmente 'ir a'
         // envia el scroll a top=0, behavior es el comportamiento
         window.scrollTo({
            behavior:'smooth',
            top:0,
         })
      }
   })
}
scrollTopButton()