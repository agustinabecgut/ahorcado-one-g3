//Selectores
let palabras = ["PECERA", "RADIANTE", "MESA", "INFUSION", "OLA", "DESACATO", "GABINETE", "ORQUESTA"];
let tablero = document.getElementById("canvas").getContext("2d");
let palabraSecreta = "";

//Palabra secreta
function elegirPalabraSecreta() {
    let palabra = palabras[Math.floor(Math.random()*palabras.length)];
    palabraSecreta = palabra;
    console.log(palabraSecreta);
}

//Iniciar juego
function iniciarJuego() {
    document.getElementById("main-iniciar").style.display = "none";
    document.getElementById("main-agregar").style.display = "none";

    elegirPalabraSecreta();
    dibujarCanvas();
    subrayar();
}