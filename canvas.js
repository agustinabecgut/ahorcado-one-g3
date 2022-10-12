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

    tablero.beginPath();
    tablero.moveTo(430, 175);
    tablero.lineTo(430, 5);
    tablero.moveTo(430, 5);
    tablero.lineTo(490, 5);
    tablero.moveTo(490, 5);
    tablero.lineTo(490, 20);
    tablero.stroke();
    tablero.closePath();
}

function dibujarCabeza() {
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#fceba6";
    tablero.strokeStyle = "#bc4a48";

    tablero.beginPath();
    tablero.arc(490, 40, 20, 0, 2*Math.PI);
    tablero.fill();
    tablero.stroke();
    tablero.closePath();
}

function dibujarTronco() {
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#fceba6";
    tablero.strokeStyle = "#bc4a48";

    tablero.beginPath();
    tablero.moveTo(490, 60);
    tablero.lineTo(490, 120);
    tablero.stroke();
    tablero.closePath();
}

function dibujarPiernaIzq() {
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#fceba6";
    tablero.strokeStyle = "#bc4a48";

    tablero.beginPath();
    tablero.moveTo(490, 120);
    tablero.lineTo(475, 140);
    tablero.stroke();
    tablero.closePath();
}

function dibujarPiernaDer() {
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#fceba6";
    tablero.strokeStyle = "#bc4a48";

    tablero.beginPath();
    tablero.moveTo(490, 120);
    tablero.lineTo(505, 140);
    tablero.stroke();
    tablero.closePath();
}

function dibujarBrazoIzq() {
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#fceba6";
    tablero.strokeStyle = "#bc4a48";

    tablero.beginPath();
    tablero.moveTo(490, 70);
    tablero.lineTo(475, 90);
    tablero.stroke();
    tablero.closePath();
}

function dibujarBrazoDer() {
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#fceba6";
    tablero.strokeStyle = "#bc4a48";

    tablero.beginPath();
    tablero.moveTo(490, 70);
    tablero.lineTo(505, 90);
    tablero.stroke();
    tablero.closePath();
}

function dibujarHorca() {
    if (errores === 5) {
        dibujarCabeza();
    } else if (errores === 4) {
        dibujarTronco();
    } else if (errores === 3) {
        dibujarPiernaIzq();
    } else if (errores === 2) {
        dibujarPiernaDer();
    } else if (errores === 1) {
        dibujarBrazoIzq();
    } else if (errores === 0) {
        dibujarBrazoDer();
    }
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

    aciertos = aciertos + 1;
}

function escribirLetraIncorrecta(letra, errorsLeft) {
    tablero.font = 'bold 40px Monserrat';
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#bc4a48";
    tablero.fillText(letra, 100 + (40*(10-errorsLeft)), 300, 40); 
}

