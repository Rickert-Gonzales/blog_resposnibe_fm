// Seleccionamos las etiquetas de HTML
const sombra = document.getElementById("shadow");
const enlaces = document.getElementById("content_links");
const openIcon = document.getElementById("open");
const closeIcon = document.getElementById("closeIcon");
console.log(sombra, enlaces);
console.log(closeIcon, openIcon);

// Funcionalida
openIcon.addEventListener("click", () => {
   console.log("Hola");
   enlaces.style.visibility = "visible";
   sombra.style.visibility = "visible";
});

closeIcon.addEventListener("click", () => {
   console.log("Hola 2");
   enlaces.style.visibility = "collapse";
   sombra.style.visibility = "collapse";
});
