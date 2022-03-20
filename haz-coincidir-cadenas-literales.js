let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Cambia esta línea
let result = waldoRegex.test(waldoIsHiding);



/* Explicación: 
Haz coincidir cadenas literales
En el desafío anterior, buscaste la palabra Hello usando la expresión regular /Hello/. Esa expresión regular buscó una coincidencia literal de la cadena Hello. Aquí hay otro ejemplo donde se busca una coincidencia literal de la cadena Kevin:

let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
testRegex.test(testStr);
Esta llamada a test devolverá true.

Cualquier otra variante de Kevin no coincidirá. Por ejemplo, la expresión regular /Kevin/ no coincidirá con kevin o KEVIN.

let wrongRegex = /kevin/;
wrongRegex.test(testStr);
Esta llamada a test devolverá false.

Un futuro desafío también mostrará cómo coincidir esas otras variantes.

Ejercicio:
Completa la expresión regular waldoRegex para encontrar "Waldo" en la cadena waldoIsHiding con una coincidencia literal.*/