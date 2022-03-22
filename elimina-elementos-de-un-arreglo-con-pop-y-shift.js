function popShift(arr) {
  let popped = arr.pop(); // Cambia esta línea
  let shifted = arr.shift(); // Cambia esta línea
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));

/*Explicación:

Elimina elementos de un arreglo con pop() y shift()
Tanto push() como unshift() tienen métodos correspondientes que son casi opuestos funcionales: pop() y shift(). Como ya habrás adivinado, en lugar de agregar, pop() elimina un elemento al final de un arreglo, mientras que shift() elimina un elemento al principio. La diferencia clave entre pop() y shift() y sus primos push() y unshift(), es que ninguno de los dos métodos toma parámetros, y cada uno sólo permite modificar un arreglo por un solo elemento a la vez.

Echemos un vistazo:

let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop();
greetings tendrá el valor ['whats up?', 'hello'].

greetings.shift();
greetings tendrá el valor ['hello'].

También podemos devolver el valor del elemento eliminado con cualquiera de los dos métodos así:

let popped = greetings.pop();
greetings tendrá el valor [] y popped tendría el valor hello.

Ejercicio:

Hemos definido una función, popShift, el cual toma un arreglo como argumento y devuelve un nuevo arreglo. Modifica la función, usando pop() y shift(), para eliminar el primer y el último elemento del arreglo, y asignar los elementos eliminados a sus correspondientes variables, de modo que el arreglo que se devuelva contenga sus valores.

 */