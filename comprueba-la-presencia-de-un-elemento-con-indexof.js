function quickCheck(arr, elem) {
  // Cambia solo el código debajo de esta línea
if (arr.indexOf(elem)>=0){
  return true;
}else {
  return false;
}
  // Cambia solo el código encima de esta línea
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));


/*Explicación: 
Comprueba la presencia de un elemento con indexOf()
Ya que los arreglos pueden modificarse, o mutarse, en cualquier momento, no se puede garantizar dónde estará un dato concreto en un arreglo determinado, o si ese elemento sigue existiendo. Afortunadamente, JavaScript nos proporciona otro método incorporado, indexOf(), que nos permite comprobar rápida y fácilmente la presencia de un elemento en un arreglo. indexOf() toma un elemento como parámetro, y cuando lo llama, devuelve la posición, o índice, de ese elemento, o -1 si el elemento no existe en el arreglo.

Por ejemplo:

let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates');
fruits.indexOf('oranges');
fruits.indexOf('pears');
indexOf('dates') devuelve -1, indexOf('oranges') devuelve 2, e indexOf('pears') devuelve 1 (el primer índice en el que existe cada elemento).

Ejercicio:

indexOf() puede ser increíblemente útil para verificar rápidamente la presencia de un elemento en un arreglo. Hemos definido una función, quickCheck, que toma un arreglo y un elemento como argumentos. Modifica la función usando indexOf() para que devuelva true si el elemento pasado existe en el arreglo, y false si no existe.

*/