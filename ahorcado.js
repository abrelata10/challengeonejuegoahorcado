var palabrasSecretas = ["POSICION", "ARTEFACTO", "COMPUTADORA", "LOCOMOTORA", "PERFIL", "ENTONAR"];
construirBaseTriangular();
var palabraSorteada;
var textoIngresado;
var letraIngresada;
var numeroDeIntentos = 1;
var letrasIngresadas = [];
var juegoPerdido;
var contadorDeAciertos = 0;

// AGREGADO DE NUEVAS PALABRAS

var inputNuevaPalabra = document.querySelector("#input-nueva-palabra"); 
inputNuevaPalabra.value = "";
inputNuevaPalabra.focus();
inputNuevaPalabra.addEventListener("input", analizarPalabra)

var agregarPalabra = document.querySelector("#nueva-palabra");
agregarPalabra.addEventListener("click", incorporarPalabra)
    
function analizarPalabra(event){
    event.preventDefault();
    textoIngresado = inputNuevaPalabra.value.toString();
    const mayusculas = /[A-Z]/;
    var testMayusculas = mayusculas.test(textoIngresado);
    if (!testMayusculas){
        inputNuevaPalabra.value = "";
        inputNuevaPalabra.focus();
    } else {
        return textoIngresado;
    }
}

function incorporarPalabra(event){
    event.preventDefault();
    analizarPalabra; 
    if (textoIngresado){
        palabrasSecretas.push(textoIngresado);
    }
    inputNuevaPalabra.value = "";
    inputNuevaPalabra.focus();
}

//COMIENZO DEL JUEGO

var iniciarJuego = document.querySelector("#iniciar-juego");
iniciarJuego.addEventListener("click", seleccionarPalabraAleatoria);

var ingresarLetra = document.querySelector("body");

var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

function seleccionarPalabraAleatoria(event){
    event.preventDefault();

    juegoPerdido = false;
    letrasIngresadas = [];
    numeroDeIntentos = 1;
    contadorDeAciertos = 0;
    pincel.clearRect(0, 0, pantalla.width, pantalla.height);
    construirBaseTriangular();

    var longitudArray = (palabrasSecretas.length) - 1;
    palabraSorteada = palabrasSecretas[Math.round(Math.random()*longitudArray)];
    var cantidadLetras = palabraSorteada.length;

    construirLineasBase(cantidadLetras);

    ingresarLetra.addEventListener("keypress", analizarLetraIngresada);

    return palabraSorteada;
}

function analizarLetraIngresada(event){
    event.preventDefault();
    if (juegoPerdido){
        return "";
    }
    letraIngresada = event.key.toUpperCase();
    const mayusculas = /[A-Z]/;
    var testLetraIngresada = mayusculas.test(letraIngresada);
    if (!testLetraIngresada){
        return "";
    } else {
        if (letrasIngresadas.length >= 1){
            for(var j = 0; j <= letrasIngresadas.length - 1; j++){
                if( letraIngresada == letrasIngresadas[j]){
                return "";
                }  
            }
        }
    letrasIngresadas.push(letraIngresada);
    }
recorrerPalabraSorteada(palabraSorteada, letraIngresada)
return letraIngresada;
}

function recorrerPalabraSorteada(palabra, letra){
    var letraAcertada = false;
    if(numeroDeIntentos < 9){
        for (var i=0; i <= palabra.length - 1; i++){
            if (letra == palabra[i]){
                ubicarLetrasAcertadas(letra, i, palabra);
                letraAcertada = true;
                contadorDeAciertos = contadorDeAciertos + 1;
                contarAciertos(contadorDeAciertos, palabra);
            }   
        }
        if (!letraAcertada){
            construirAhorcado(numeroDeIntentos, letra);
            numeroDeIntentos = numeroDeIntentos + 1;
        }
    } else {
        construirAhorcado(numeroDeIntentos, letra);
        juegoPerdido = true;
    }
}

function ubicarLetrasAcertadas(letra, posicion, palabra){
    var incremento = 600/((2*palabra.length)-1);
    var inicioLetras = 550;
    var xLetra = inicioLetras + (incremento * posicion * 2);
    imprimirLetrasCorrectas(letra, xLetra, 680 )
}

function contarAciertos(contador, palabra){
    if (contador == palabra.length){
        imprimirTextoJuegoGanado();
        juegoPerdido = true;
    } else {
        return "";
    }
}


    