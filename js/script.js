function ObtenerValor() {
    let ValorIngresado = document.getElementById("Distancia").value
    //Valido que sea un entero
    if (Number.isInteger(parseInt(ValorIngresado))) {
        if (ValorIngresado >= 0 && ValorIngresado <= 1000) {
            document.getElementById("Respuesta").innerHTML = "La distancia de " + ValorIngresado + " metros debe recorrerse a pie"
            document.getElementById("Imagen").innerHTML = '<img src="./images/pie.png" />'
        } else if (ValorIngresado > 1000 && ValorIngresado <= 10000) {
            document.getElementById("Respuesta").innerHTML = "La distancia de " + ValorIngresado + " metros debe recorrerse en bicicleta"
            document.getElementById("Imagen").innerHTML = '<img src="./images/bicicleta.png" />'
        } else if (ValorIngresado > 10000 && ValorIngresado <= 30000) {
            document.getElementById("Respuesta").innerHTML = "La distancia de " + ValorIngresado + " metros debe recorrerse en colectivo"
            document.getElementById("Imagen").innerHTML = '<img src="./images/colectivo.png" />'
        } else if (ValorIngresado > 30000 && ValorIngresado <= 100000) {
            document.getElementById("Respuesta").innerHTML = "La distancia de " + ValorIngresado + " metros debe recorrerse en auto"
            document.getElementById("Imagen").innerHTML = '<img src="./images/auto.png" />'
        } else if (ValorIngresado > 100000) {
            document.getElementById("Respuesta").innerHTML = "La distancia de " + ValorIngresado + " metros debe recorrerse en avión"
            document.getElementById("Imagen").innerHTML = '<img src="./images/avion.png" />'
        }
    }
    else {
        document.getElementById("Respuesta").innerHTML = "El formato ingresado no es correcto"
        document.getElementById("Imagen").innerHTML = '<img src="./images/interrogacion.png" />'
    }
}

//Ejercicio 2

function ObtenerValores() {

    //Cargo el array con los numeros de los campos de texto
    var Numeros = [document.getElementById("num1").value,
    document.getElementById("num2").value,
    document.getElementById("num3").value,
    document.getElementById("num4").value,
    document.getElementById("num5").value];
    //Calculo el mayor con Math
    let resultado = Math.max.apply(null, Numeros);
    //si el resultado es distinto de null lo muestro, sino hay algun numero mal ingresado
    if (resultado != NaN) {
        document.getElementById("Respuesta2").innerHTML = "El mayor número ingresado es: " + resultado;
    } else {
        document.getElementById("Respuesta").innerHTML = "Ingresaste mal algún número"
    }
}