function raiseToPower(b, e) {
  return Math.pow(b,e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);


/*Explicación:
Captura argumentos pasados en el orden incorrecto al llamar a una función
Siguiendo con la discusión sobre la llamada a funciones, el siguiente error a tener en cuenta es cuando los argumentos de una función se suministran en el orden incorrecto. Si los argumentos son de tipos diferentes, como una función que espera un arreglo y un entero, es probable que se produzca un error de ejecución. Si los argumentos son del mismo tipo (todos enteros, por ejemplo), la lógica del código no tendrá sentido. Asegúrate de proporcionar todos los argumentos requeridos, en el orden correcto para evitar estos problemas.

Ejercicio:

La función raiseToPower eleva una base a un exponente. Desafortunadamente, no se llama correctamente - corrige el código para que el valor de power sea el 8 esperado.

 */