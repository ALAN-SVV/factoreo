

function factorial(n) {
    //ponemos un factorial y como condición ponemos que no debe ser un numero negativo
    if (n < 0) {
        return "No está definido para números negativos.";//mensaje
    }
    /*Ordenamos al programa que si el valor ingresado es 0 o 1 
        nos ponga imediatamente el resultado 1*/
    //En este apartado nos devolvera la función
    if (n === 0 || n === 1) {/*En esta aparte utilizamos los 3 =
        para verificar si las expresiones son iguales*/
        return 1;//Los // sirven para evaluar datos
    }

    let resultado = 1;//Comenazamos a resolver el factoreo
    for (let i = 2; i <= n; i++) {//En el bucle for ponemos que el resultado debe ser i
        //para luego poner dentro de la llaves con que número empezamos y de que manera ira aumentando
        resultado *= i;//si esta condición no se cumple nos dara el  resultado
    }
    return resultado;
}

// Conectar el evento del botón
document.getElementById('calcular').addEventListener('click', function () {/*Hacemos que el boton se conecte 
    por medio de los id creados en html, utilizando el fuction que realiza la calculación  de un valor
    */
    const numero = parseInt(document.getElementById('numero').value);/*Tranformamos la varible en una constante
    y hacemos que se presente con el codigo values que sirve para devorlver un array*/
    const resultado = factorial(numero);/*Lo mismos hacemos aqui pero ahora con con otra variables y
    solo poniendo el factorial*/
    document.getElementById('resultado').innerText = `La respuesta es ${resultado}`;
    /*Hacemos que se presente el documento con la llamada de la clase resultado
     y utilizando esta etiqueta que va a imprimir el resultado*/
}
);