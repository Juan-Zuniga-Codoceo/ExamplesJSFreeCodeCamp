let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Cambia esta línea
let result = calRegex.test(rickyAndCal);


/*Explicación:
Haz coincidir patrones de cadena de inicio
Los desafíos anteriores demostraron que las expresiones regulares pueden ser utilizadas para buscar una serie de coincidencias. También se utilizan para buscar patrones en posiciones específicas en cadenas.

En un desafío anterior, usaste el carácter caret (^) dentro de un conjunto de caracteres para crear un conjunto de caracteres en la forma [^thingsThatWillNotBeMatched]. Fuera de un conjunto de caracteres, el caret es utilizado para buscar patrones al principio de las cadenas.

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
La primera llamada test devolverá true, mientras que la segunda retornara false.

Ejercicio:

Usa el carácter caret en una expresión para buscar Cal solo al principio de la cadena rickyAndCal.

 */