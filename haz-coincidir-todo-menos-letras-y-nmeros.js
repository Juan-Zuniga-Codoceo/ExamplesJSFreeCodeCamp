let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Cambia esta línea
let result = quoteSample.match(nonAlphabetRegex).length;


/* Explicación:
Haz coincidir todo menos letras y números
Has aprendido que puedes usar un atajo para emparejar alfanuméricos [A-Za-z0-9_] usando \w. Un patrón natural que tal vez quieras buscar es lo contrario a la alfanumérica.

Puedes buscar lo contrario de \w con \W. Ten en cuenta, el patrón contrario usa letra mayúscula. Este atajo es lo mismo que [^A-Za-z0-9_].

let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand);
sentence.match(shortHand);
El primer match devuelve el valor ["%"] y el segundo devuelve ["!"].

Ejercicio:
Usa la clase de caracteres abreviados \W para contar el número de caracteres no alfanuméricos en varias comillas y cadenas.

*/