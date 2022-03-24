// La variable global
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Cambia el código debajo de esta línea
function add(arr,bookName) {
  let newArr = [...arr];
  newArr.push(bookName);
  return newArr;

  // Cambia el código encima de esta línea
}

// Cambia el código debajo de esta línea
function remove(arr,bookName) {
  let newArr = [...arr];
  if (newArr.indexOf(bookName) >= 0) {

    newArr.splice(newArr.indexOf(bookName), 1);
    return newArr;

    // Cambia el código encima de esta línea
    }
}


/* Refactoriza variables globales por fuera de funciones
Hasta ahora, hemos visto dos principios distintos para la programación funcional:

No alteres una variable u objeto: crea nuevas variables y objetos y devuélvelos, si es necesario, desde una función. Pista: usar algo como const newArr = arrVar, donde arrVar es un arreglo, simplemente creará una referencia a la variable existente y no una copia. Así que cambiar un valor en newArr cambiaría el valor en arrVar.

Declara parámetros de función: cualquier cálculo dentro de una función depende sólo de los argumentos pasados a la función y no en ningún objeto o variable global.

Añadir uno a un número no es muy emocionante, pero podemos aplicar estos principios cuando trabajamos con arreglos u objetos más complejos.

Ejercicio:

Reescribe el código para que el arreglo global bookList no sea cambiado dentro de ninguna de las funciones. La función add debe agregar el bookName dado al final del arreglo pasado a esta y devolver un nuevo arreglo (lista). La función remove debe eliminar el bookName dado del arreglo pasado a esta.

Nota: ambas funciones deben devolver un arreglo y cualquier nuevo parámetro debe ser añadido antes del parámetro bookName.


Link ayuda:https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-refactor-global-variables-out-of-functions/301235
*/