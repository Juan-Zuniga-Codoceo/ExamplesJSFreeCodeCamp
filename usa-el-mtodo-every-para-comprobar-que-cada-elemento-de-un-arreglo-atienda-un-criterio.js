function checkPositive(arr) {
  // Cambia solo el código debajo de esta línea
 return arr.every(function(value) {
    return value > 0;
  });

  // Cambia solo el código encima de esta línea
}

checkPositive([1, 2, 3, -4, 5]);


/*Usa el método "every" para comprobar que cada elemento de un arreglo atienda un criterio
El método every funciona con arreglos para comprobar si every element pasa una prueba en particular. Devuelve un valor booleano - true si todos los valores cumplen los criterios, false si no.

Por ejemplo, el siguiente código comprobaría si cada elemento en el arreglo numbers es menor a 10:

const numbers = [1, 5, 8, 0, 10, 11];

numbers.every(function(currentValue) {
  return currentValue < 10;
});
El método every devolvería false aquí.


Ejercicio:

Utiliza el método every dentro de la función checkPositive para comprobar si cada elemento en arr es positivo. La función debe devolver un valor booleano.


Link ayuda:https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-use-the-every-method-to-check-that-every-element-in-an-array-meets-a-criteria/301312
 */