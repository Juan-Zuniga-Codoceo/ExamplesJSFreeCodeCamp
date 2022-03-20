let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Cambia esta línea
let result = lastRegex.test(caboose);

/*Explicación:

Haz coincidir patrones de cadena final
En el último desafío, aprendiste a usar el carácter de intercalación para buscar patrones al inicio de las cadenas. También hay una manera de buscar patrones al final de las cadenas.

Puedes buscar el final de las cadenas usando el carácter del signo de dólar $ al final de la expresión regular.

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
La primera llamada a test devuelve true, mientras que la segunda retorna false.

Ejercicio:

Usa el carácter de ancla ($) para coincidir la cadena caboose al final de la cadena caboose. */