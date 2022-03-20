let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Cambia esta línea
let result = quoteSample.match(vowelRegex); // Cambia esta línea


/*Explicación:
Haz coincidir un solo carácter con múltiples posibilidades
Aprendiste cómo hacer coincidir los patrones literales (/literal/) y el carácter de comodín (/./). Estos son los extremos de las expresiones regulares, donde uno encuentra coincidencias exactas y el otro coincide de todo. Hay opciones que representan un equilibrio entre los dos extremos.

Puedes buscar un patrón literal con cierta flexibilidad utilizando las clases de caracteres. Las clases de caracteres te permiten definir un grupo de caracteres que deseas coincidir colocándolos dentro de corchetes ([ y ]).

Por ejemplo, si quieres hacer coincidir bag, big, y bug pero no bog. Puedes crear la expresión regular /b[aiu]g/ para hacer esto. [aiu] es la clase de caracteres que solo coincidirá con los caracteres a, i, o u.

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);
En orden, las cuatro llamadas de match devolverán los valores ["big"], ["bag"], ["bug"], and null.

Ejercicio:

Usa una clase de caracteres con las vocales (a, e, i, o u) en tu expresión regular vowelRegex para encontrar todas las vocales en la cadena quoteSample.

Nota: Asegúrate de hacer coincidir tanto las vocales mayúsculas como minúsculas. */