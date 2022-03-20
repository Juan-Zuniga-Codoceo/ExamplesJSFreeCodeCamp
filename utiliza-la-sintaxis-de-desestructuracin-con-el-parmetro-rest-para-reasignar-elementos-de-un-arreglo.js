const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  "use strict";
  // change code below this line
  const [a, b, ...arr] = list;
  // change code above this line
  return arr;
}
const arr = removeFirstTwo(source);

/* Explicación:
 Utiliza la sintaxis de desestructuración con el parámetro rest para reasignar elementos de un arreglo
En algunas situaciones que implican la desestructuración de arreglos, tal vez queramos recolectar el resto de elementos en un arreglo separado.

El resultado es similar a Array.prototype.slice(), como se muestra a continuación:

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);
La consola mostrará los valores 1, 2 y [3, 4, 5, 7].

Las variables a y b toman el primer y segundo valor del arreglo. Después de eso, debido a la presencia del parámetro rest, 
arr obtiene el resto de los valores en forma de un arreglo. El elemento rest sólo funciona correctamente como la última variable en la lista. 
Por ejemplo, no puedes usar el parámetro rest para capturar un sub-arreglo que deje fuera el último elemento del arreglo original.


Ejercicio:
Utiliza la sintaxis de desestructuración con el parámetro rest para realizar un Array.prototype.slice() eficaz, 
de tal manera que arr sea un sub-arreglo del arreglo original source con los dos primeros elementos omitidos.*/

