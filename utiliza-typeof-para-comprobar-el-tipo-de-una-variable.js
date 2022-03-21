let seven = 7;
let three = "3";
console.log(seven + three);
// Cambia solo el código debajo de esta línea
console.log(typeof seven);
console.log(typeof three);


/* Explicación:

Utiliza typeof para comprobar el tipo de una variable
Puedes utilizar typeof para comprobar la estructura de datos, o tipo, de una variable. Esto es útil en la depuración cuando se trabaja con múltiples tipos de datos. Si crees que estás sumando dos números, pero uno es en realidad una cadena, los resultados pueden ser inesperados. Los errores de tipo pueden estar al acecho en los cálculos o en las llamadas a funciones. Ten cuidado especialmente cuando accedas y trabajes con datos externos en forma de objeto de JavaScript Object Notation (JSON).

Aquí hay algunos ejemplos que utilizan typeof:

console.log(typeof "");
console.log(typeof 0);
console.log(typeof []);
console.log(typeof {});
En orden, la consola mostrará las cadenas string, number, object, y object.

JavaScript reconoce siete tipos de datos primitivos (inmutables): Boolean, Null, Undefined, Number, String, Symbol (nuevo con ES6), y BigInt (nuevo con ES2020), y un tipo para elementos mutables: Object. Ten en cuenta que en JavaScript, los arreglos son técnicamente un tipo de objeto.

Ejercicio:

Agrega dos sentencias console.log() para comprobar el typeof de cada una de las dos variables seven y three en el código. */