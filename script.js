//selectores
let palabras = ["PANTOMIMA", "UNIVERSIDAD", "IDIOSINCRACIA", "OVOVIVIPARO", "CALEIDOSCOPIO", "XILOFONO", "OBOE"];
let tablero = document.getElementById("canvas").getContext("2d");
let palabraSecreta = "";

//palabra secreta
function elegirPalabraSecreta() {
    let palabra = palabras[Math.floor(Math.random() * palabras.length)];
    palabraSecreta = palabra;
}

//dibujar canvas
function dibujarCanvas() {
    tablero.lineWidth = 8;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#fceba6";
    tablero.strokeStyle = "#fceba6";

    tablero.fillRect(0,0,940,460);
    tablero.beginPath();
    tablero.moveTo(350, 200);
    tablero.lineTo(410, 200);
    tablero.stroke();
    tablero.closePath();
}

//subrayado
function subrayar() {
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#43254a";
    tablero.strokeStyle = "#43254a";

    let ancho = 800/palabraSecreta.length;

    for (let i = 0; i < palabraSecreta.length; i++) {
        tablero.moveTo(80 + (ancho * i), 300)
        tablero.lineTo(130 + (ancho * i), 300)
    }

    tablero.stroke();
    tablero.closePath();
}

//iniciar juego
function iniciarJuego(){
    elegirPalabraSecreta();
    dibujarCanvas();
    subrayar();
}


