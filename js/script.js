//regex para validar solo números
const regex = /^[0-9]*$/;

function ObtenerTransporte() {

    let Metros = document.getElementById("Distancia").value
    let Result = document.getElementById("Respuesta");
    let img = document.getElementById("Imagen");
    //Valido que sea un entero
    if (Number.isInteger(parseInt(Metros)) && regex.test(Metros)) {
        if (Metros >= 0 && Metros <= 1000) {
            Result.innerHTML = "La distancia de " + Metros + " metros debe recorrerse a pie"
            img.innerHTML = '<img src="./images/pie.png" />'
            Result.classList.add("Ok");
            Result.classList.remove("Error");
        } else if (Metros > 1000 && Metros <= 10000) {
            Result.innerHTML = "La distancia de " + Metros + " metros debe recorrerse en bicicleta"
            img.innerHTML = '<img src="./images/bicicleta.png" />'
            Result.classList.add("Ok");
            Result.classList.remove("Error");
        } else if (Metros > 10000 && Metros <= 30000) {
            Result.innerHTML = "La distancia de " + Metros + " metros debe recorrerse en colectivo"
            img.innerHTML = '<img src="./images/colectivo.png" />'
            Result.classList.add("Ok");
            Result.classList.remove("Error");
        } else if (Metros > 30000 && Metros <= 100000) {
            Result.innerHTML = "La distancia de " + Metros + " metros debe recorrerse en auto"
            img.innerHTML = '<img src="./images/auto.png" />'
            Result.classList.add("Ok");
            Result.classList.remove("Error");
        } else if (Metros > 100000) {
            Result.innerHTML = "La distancia de " + Metros + " metros debe recorrerse en avión"
            img.innerHTML = '<img src="./images/avion.png" />'
            Result.classList.add("Ok");
            Result.classList.remove("Error");
        }
    }
    else {
        Result.innerHTML = "El formato ingresado no es correcto"
        img.innerHTML = '<img src="./images/interrogacion.png" />'
        Result.classList.add("Error");
        Result.classList.remove("Ok");
    }
}

//Ejercicio 2

//Primer Metodo usando Math
function ObtenerMayor() {

    let Result = document.getElementById("Respuesta2");
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
        Result.innerHTML = "El mayor número ingresado es: " + resultado;
        Result.classList.add("Ok");
        Result.classList.remove("Error");
    } else {
        Result.innerHTML = "Ingresaste mal algún número"
        Result.classList.add("Error");
        Result.classList.remove("Ok");
    }
}

//Segundo metodo usando un for y recorriendo el array
function ObtenerMayor2() {

    let Result = document.getElementById("Respuesta2");
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
        Result.innerHTML = "El mayor número ingresado es: " + max;
        Result.classList.add("Ok");
        Result.classList.remove("Error");
    } else {
        //Si hay error aviso que se ingresó mal algún número
        Result.innerHTML = "Ingresaste mal algún número"
        Result.classList.add("Error");
        Result.classList.remove("Ok");
    }

}

