const suma = (a,b) => {
    return a + b;  
}

const resta = (a,b) => {
    return a - b;
}

function rango(inicio, fin, valor) {
    return (new Array(fin - inicio + 1)).fill(undefined).map((_) => valor);
}

const multiplicacion = (a,b) => {
    return rango(1,b,a)
    .reduce((x,y) => suma(x,y))
}

const division = (numerador,denominador) => {
    return rango(1,numerador, denominador)
    .reduce((acumulador,numero) => {
        if (multiplicacion(numero, denominador) <= denominador) {
            return acumulador = acumulador + 1;
        }
        return acumulador;
    })
}


console.log(suma(9,3));
console.log(resta(7,6));
console.log(multiplicacion(4,8)); // --> 40
console.log(division(25, 5)) // --> 5
