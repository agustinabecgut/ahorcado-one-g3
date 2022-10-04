//Canvas
function dibujarCanvas() {
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#fceba6";
    tablero.strokeStyle = "#bc4a48";

    tablero.fillRect(0, 0, 940, 660);
    tablero.beginPath();
    tablero.moveTo(400, 175);
    tablero.lineTo(460, 175);
    tablero.stroke();
    tablero.closePath();
}

function subrayar() {
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#fceba6";
    tablero.strokeStyle = "#bc4a48";

    let anchura = 940/palabraSecreta.length;

    for (let i = 0; i < palabraSecreta.length; i++) {
        tablero.moveTo(50 + (anchura*i), 250);
        tablero.lineTo(100 + (anchura*i), 250);
    }
    tablero.stroke();
    tablero.closePath();
}

//Validaciones
function escribirLetraCorrecta(index) {
    tablero.font = 'bold 60px Monserrat';
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#bc4a48";

    let anchura = 940/palabraSecreta.length;
    tablero.fillText(palabraSecreta[index], 55 + (anchura*index), 240);
}

function escribirLetraIncorrecta(letra, errorsLeft) {
    tablero.font = 'bold 40px Monserrat';
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#bc4a48";
    tablero.fillText(letra, 100 + (40*(10-errorsLeft)), 300, 40); 
}