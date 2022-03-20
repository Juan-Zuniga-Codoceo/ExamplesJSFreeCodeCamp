let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Cambia esta línea
let result = text.match(myRegex);


/* Explicación: 
Encuentra caracteres con una coincidencia perezosa
En las expresiones regulares, una coincidencia codiciosa encuentra la parte más larga posible de una cadena que se ajusta al patrón de la expresión regular y la devuelve como una coincidencia. La alternativa es llamada coincidencia perezosa, la cual encuentra la parte más pequeña posible de la cadena que satisface el patrón de la expresión regular.

Puedes aplicar la expresión regular /t[a-z]*i/ a la cadena "titanic". Esta expresión regular es básicamente un patrón que comienza con t, termina con i, y tiene algunas letras intermedias.

Las expresiones regulares son por defecto codiciosas, por lo que la coincidencia devolvería ["titani"]. Encuentra la sub-cadena más grande posible que se ajusta al patrón.

Sin embargo, puedes usar el carácter ? para cambiarla a una coincidencia perezosa. "titanic" al coincidir con la expresión regular ajustada de /t[a-z]*?i/ devuelve ["ti"].

Nota: Se debe evitar analizar HTML con expresiones regulares, pero coincidir patrones con una cadena HTML utilizando expresiones regulares está completamente bien.

Ejercicio:
Corrige la expresión regular /<.*>/ para que devuelva la etiqueta HTML <h1> y no el texto "<h1>Winter is coming</h1>". Recuerda que el comodín . en una expresión regular coincide con cualquier carácter.

*/