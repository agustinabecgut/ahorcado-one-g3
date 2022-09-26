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