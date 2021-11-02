//regex para validar solo números
const regex = /^[0-9]*$/;

function ObtenerTransporte() {

    let ValorIngresado = document.getElementById("Distancia").value

    //Valido que sea un entero
    if (Number.isInteger(parseInt(ValorIngresado)) && regex.test(ValorIngresado)) {
        if (ValorIngresado >= 0 && ValorIngresado <= 1000) {
            document.getElementById("Respuesta").innerHTML = "La distancia de " + ValorIngresado + " metros debe recorrerse a pie"
            document.getElementById("Imagen").innerHTML = '<img src="./images/pie.png" />'
            document.getElementById("Respuesta").classList.add("Ok");
            document.getElementById("Respuesta").classList.remove("Error");
        } else if (ValorIngresado > 1000 && ValorIngresado <= 10000) {
            document.getElementById("Respuesta").innerHTML = "La distancia de " + ValorIngresado + " metros debe recorrerse en bicicleta"
            document.getElementById("Imagen").innerHTML = '<img src="./images/bicicleta.png" />'
            document.getElementById("Respuesta").classList.add("Ok");
            document.getElementById("Respuesta").classList.remove("Error");
        } else if (ValorIngresado > 10000 && ValorIngresado <= 30000) {
            document.getElementById("Respuesta").innerHTML = "La distancia de " + ValorIngresado + " metros debe recorrerse en colectivo"
            document.getElementById("Imagen").innerHTML = '<img src="./images/colectivo.png" />'
            document.getElementById("Respuesta").classList.add("Ok");
            document.getElementById("Respuesta").classList.remove("Error");
        } else if (ValorIngresado > 30000 && ValorIngresado <= 100000) {
            document.getElementById("Respuesta").innerHTML = "La distancia de " + ValorIngresado + " metros debe recorrerse en auto"
            document.getElementById("Imagen").innerHTML = '<img src="./images/auto.png" />'
            document.getElementById("Respuesta").classList.add("Ok");
            document.getElementById("Respuesta").classList.remove("Error");
        } else if (ValorIngresado > 100000) {
            document.getElementById("Respuesta").innerHTML = "La distancia de " + ValorIngresado + " metros debe recorrerse en avión"
            document.getElementById("Imagen").innerHTML = '<img src="./images/avion.png" />'
            document.getElementById("Respuesta").classList.add("Ok");
            document.getElementById("Respuesta").classList.remove("Error");
        }
    }
    else {
        document.getElementById("Respuesta").innerHTML = "El formato ingresado no es correcto"
        document.getElementById("Imagen").innerHTML = '<img src="./images/interrogacion.png" />'
        document.getElementById("Respuesta").classList.add("Error");
        document.getElementById("Respuesta").classList.remove("Ok");
    }
}

//Ejercicio 2

function ObtenerMayor() {

    //Cargo el array con los numeros de los campos de texto
    var Numeros = [document.getElementById("num1").value,
    document.getElementById("num2").value,
    document.getElementById("num3").value,
    document.getElementById("num4").value,
    document.getElementById("num5").value];
    //Calculo el mayor con Math
    let resultado = Math.max.apply(null, Numeros);
    //si el resultado es distinto de null lo muestro, sino hay algun numero mal ingresado
    if (!Number.isNaN(resultado)) {
        document.getElementById("Respuesta2").innerHTML = "El mayor número ingresado es: " + resultado;
        document.getElementById("Respuesta2").classList.add("Ok");
        document.getElementById("Respuesta2").classList.remove("Error");
    } else {
        document.getElementById("Respuesta2").innerHTML = "Ingresaste mal algún número"
        document.getElementById("Respuesta2").classList.add("Error");
        document.getElementById("Respuesta2").classList.remove("Ok");
    }
}

function ObtenerMayor2() {

    //Cargo el array con los numeros de los campos de texto
    var Numeros = [document.getElementById("num1").value,
    document.getElementById("num2").value,
    document.getElementById("num3").value,
    document.getElementById("num4").value,
    document.getElementById("num5").value];

    let max = 0;

    let error = false;
    //Recorro de la posicion 1 hasta el final del array
    for (let i = 0; i < Numeros.length; i++) {
        //Si el numero no es un entero o contiene algun otro caracter que no sea numero
        //Me da un error
        if (!Number.isInteger(parseInt(Numeros[i])) || !regex.test(Numeros[i])) {
            error = true;
        }
        if (parseInt(Numeros[i]) > max) {
            max = parseInt(Numeros[i]);
        }

    }

    if (!error) { //Si no hay error muestro el mayor
        document.getElementById("Respuesta2").innerHTML = "El mayor número ingresado es: " + max;
        document.getElementById("Respuesta2").classList.add("Ok");
        document.getElementById("Respuesta2").classList.remove("Error");
    } else {
        //Si hay error aviso que se ingresó mal algún número
        document.getElementById("Respuesta2").innerHTML = "Ingresaste mal algún número"
        document.getElementById("Respuesta2").classList.add("Error");
        document.getElementById("Respuesta2").classList.remove("Ok");
    }

}

