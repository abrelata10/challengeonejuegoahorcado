var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

pincel.fillStyle = "white";
pincel.fillRect(0,0,1200,800);

function construirBaseTriangular(){
    pincel.strokeStyle = "black";
    pincel.lineWidth = 4;
    pincel.beginPath();
    pincel.moveTo(300,650);
    pincel.lineTo(150,700);
    pincel.lineTo(450,700);
    pincel.lineTo(300,650);
    pincel.stroke();
}

function graficarLineasError(xInicial, yInicial, xFinal, yFinal){
    pincel.strokeStyle = "black";
    pincel.lineWidth = 4;
    pincel.beginPath();
    pincel.moveTo(xInicial, yInicial);
    pincel.lineTo(xFinal, yFinal);
    pincel.stroke();
}

function graficarCabeza(xCtro, yCtro, diam, anguloInicio, anguloFinal){
    pincel.strokeStyle = "black";
    pincel.lineWidth = 4;
    pincel.beginPath();
    pincel.arc(xCtro, yCtro, diam, anguloInicio, anguloFinal);
    pincel.stroke();
}

function imprimirLetrasErradas(letra, xLetra, yLetra){
    pincel.fillStyle = "black";
    pincel.font = "bold 30px sans-serif";
    pincel.fillText(letra, xLetra, yLetra);
}

function construirAhorcado(error, letra){
    pincel.strokeStyle = "black";
    pincel.lineWidth = 4;
    if (error == 1){
        graficarLineasError(300, 650, 300, 70);
        imprimirLetrasErradas(letra, 800, 400);
    } else if (error == 2){
        graficarLineasError(300, 70, 650, 70);
        imprimirLetrasErradas(letra, 840, 400);
    } else if (error == 3){
        graficarLineasError(650, 70, 650, 150);
        imprimirLetrasErradas(letra, 880, 400);
    } else if (error == 4){
        graficarCabeza(650, 200, 50, 0, 2*3.14);
        imprimirLetrasErradas(letra, 920, 400);
    } else if (error == 5){
        graficarLineasError(650, 250, 650, 400);
        imprimirLetrasErradas(letra, 960, 400);
    } else if (error == 6){
        graficarLineasError(650, 400, 570, 480);
        imprimirLetrasErradas(letra, 1000, 400);
    } else if (error == 7){
        graficarLineasError(650, 400, 730, 480);
        imprimirLetrasErradas(letra, 1040, 400);
    } else if (error == 8){
        graficarLineasError(650, 300, 570, 220);
        imprimirLetrasErradas(letra, 1080, 400);
    } else if (error == 9){
        graficarLineasError(650, 300, 730, 220);
        imprimirLetrasErradas(letra, 1120, 400);

        pincel.fillStyle = "red";
        pincel.font = "bold 40px sans-serif";
        pincel.fillText("Fin del juego!",800,260);
        pincel.fillText("Prueba nuevamente.",800,300);

        return "";
    }
}

function construirLineasBase(cantidad){
    var incremento = 600/((2*cantidad)-1);
    var inicioLineas = 550;
    for (var x = 1; x<=(2*cantidad)-1; x++){
        if ((x%2 != 0)){
            pincel.strokeStyle = "black";
            pincel.lineWidth = 4;
            pincel.beginPath();
            pincel.moveTo(inicioLineas, 700);
            pincel.lineTo(inicioLineas + incremento, 700);
            pincel.stroke();
            inicioLineas = inicioLineas + incremento;
        } else {
            pincel.strokeStyle = "white";
            pincel.lineWidth = 4;
            pincel.beginPath();
            pincel.moveTo(inicioLineas, 700);
            pincel.lineTo(inicioLineas + incremento, 700);
            pincel.stroke();
            inicioLineas = inicioLineas + incremento;
        }
    }
}

function imprimirLetrasCorrectas(letra, xLetra, yLetra){
    pincel.fillStyle = "black";
    pincel.font = "bold 30px sans-serif";
    pincel.fillText(letra, xLetra, yLetra);
}

function imprimirTextoJuegoGanado(){
    pincel.fillStyle = "green";
    pincel.font = "bold 40px sans-serif";
    pincel.fillText("Felicitaciones!",800,260);
    pincel.fillText("Acertaste la palabra.",800,300);
}


    
