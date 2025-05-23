const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("paleta");

btn.addEventListener("click", function () {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
    }
    const barra = document.querySelector("header");
    const Paleta = document.querySelector(".botonC");
    const navegacion = document.querySelector(".url");
    const Url = document.querySelectorAll(".letra");
    const fondoMain = document.querySelector(".main"); // indicamos la clase donde esta el fondo del main portafolio
    const LetraBienvenido = document.querySelector(".div1-main"); // letras del titulo de la presentacion del portafolio
    const fondobody = document.querySelector("body"); 
    barra.style.backgroundColor = hexColor;
    Paleta.style.backgroundColor = hexColor;
    navegacion.style.backgroundColor = hexColor + "B3";
    function hexToRgb(hex) {
        const bigint = parseInt(hex.slice(1), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return { r, g, b };
    }
    function isDark(hexColor) {
        const { r, g, b } = hexToRgb(hexColor);
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        return brightness < 128;
    }
    if(isDark(hexColor) ){

        Url.forEach(function(Url) {
            Url.style.color = "#FFFFFF"; // fondo de color blanco aqui

        });
        fondobody.style.backgroundImage = 'url("imagenes/fondooscuro.png")';
        fondoMain.style.backgroundImage = 'url("imagenes/fondooscuromain.png")';
        LetraBienvenido.style.color = "#FFFFFF";
    }
    else{
        Url.forEach(function(Url) {
            Url.style.color = "#000000";  // fondo oscuro aqui
        });
        fondobody.style.backgroundImage = 'url("imagenes/fondobody.jpg")';
        fondoMain.style.backgroundImage = 'url("imagenes/main.jpg")';
        LetraBienvenido.style.color = "#000000";
        

    }
    
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

var myCarousel = document.querySelector('#proyectosCarousel');
    var carousel = new bootstrap.Carousel(myCarousel, {
    interval: false,
    pause: true,
    ride: false
    });