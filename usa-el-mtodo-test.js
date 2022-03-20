let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Cambia esta línea

/* Explicación: 
Usa el método "test"
Las expresiones regulares se utilizan en lenguajes de programación para coincidir con partes de cadenas. Creas patrones para ayudarte a hacer esa coincidencia.

Si quieres encontrar la palabra the en la cadena The dog chased the cat, puedes utilizar la siguiente expresión regular: /the/. Ten en cuenta que las comillas no son requeridas dentro de la expresión regular.

JavaScript tiene múltiples formas de usar expresiones regulares. Una forma de probar una expresión regular es usando el método .test(). El método .test() toma la expresión regular, la aplica a una cadena (que se coloca dentro de los paréntesis), y devuelve true o false si tu patrón encuentra algo o no.

let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
El método test aquí devuelve true.

Ejercicio:

Aplica la expresión regular myRegex en la cadena myString usando el método .test().*/