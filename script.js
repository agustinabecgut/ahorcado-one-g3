//Selectores
let palabras = ["PECERA", "RADIANTE", "MESA", "INFUSION", "OLA", "DESACATO", "GABINETE", "ORQUESTA"];
let tablero = document.getElementById("canvas").getContext("2d");
let palabraSecreta = "";
let letras = [];
let errores = 6;

//onload
function principal() {
    document.getElementById("main-iniciar").style.display = "block";
    document.getElementById("main-jugar").style.display = "none";
    document.getElementById("main-agregar").style.display = "none";
}

//Palabra secreta
function elegirPalabraSecreta() {
    let palabra = palabras[Math.floor(Math.random()*palabras.length)];
    palabraSecreta = palabra;
    console.log(palabraSecreta);
}

//Comprobando las letras
function comprobarLetra(key) {
    let estado = false;
    
    if(key >= 65 && letras.indexOf(key) || key <= 90 && letras.indexOf(key)) {
        letras.push(key);
        console.log(key);
        return estado;
    } else {
        estado = true;
        console.log(key);
        return estado;
    }
}

//Errores
function agregarLetraIncorrecta() {
    errores = errores - 1;
    console.log(errores);
}

//Iniciar juego
function iniciarJuego() {
    document.getElementById("main-jugar").style.display = "block";
    document.getElementById("main-iniciar").style.display = "none";
    document.getElementById("main-agregar").style.display = "none";

    elegirPalabraSecreta();
    dibujarCanvas();
    subrayar();

    document.onkeydown = (e) => {
        let letra = e.key.toUpperCase();    

        if (comprobarLetra(letra) && palabraSecreta.includes(letra)) {
            for(let i = 0; i < palabraSecreta.length; i++) {
                if (palabraSecreta[i] === letra) {
                    escribirLetraCorrecta(i);
                }
            }
        } else {
            agregarLetraIncorrecta(letra);
            escribirLetraIncorrecta(letra, errores);
            dibujarHorca();
        }
    }
}

//Fin del juego
//function finDelJuego() {
//    if (errores === 0) {
//
//    }
//}

//Agregar palabra
function agregarPalabra() {
    document.getElementById("main-agregar").style.display = "block";
    document.getElementById("main-iniciar").style.display = "none";
    document.getElementById("main-jugar").style.display = "none";
}

//Guardar palabra agregada
function guardarPalabra() {
    let palabra = document.getElementById("nueva-palabra").value;
    let longitud = palabra.length;

    if (longitud < 3) {
        alert("La palabra debe tener al menos 3 letras");
    } else if (longitud > 8) {
        alert("La palabra debe tener hasta 8 letras como máximo");
    } else {
        palabras.push(palabra.toUpperCase());
        console.log(palabras)
        iniciarJuego();
    }
}