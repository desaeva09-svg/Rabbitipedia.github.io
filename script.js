
const botonMenu = document.getElementById("botonMenu");

botonMenu.addEventListener("click", function() {

    $("#menuRabbitipedia").slideToggle();

});


const botonCuriosidad = document.getElementById("botonCuriosidad");

botonCuriosidad.addEventListener("click", function() {

    mostrarCuriosidad();

});


function mostrarCuriosidad() {

    const curiosidad = document.getElementById("textoCuriosidad");

    if (curiosidad.style.display === "none") {

        curiosidad.style.display = "block";

        botonCuriosidad.textContent = "🥕 Ocultar curiosidad";

    } else {

        curiosidad.style.display = "none";

        botonCuriosidad.textContent = "🥕 Mostrar curiosidad";

    }

}