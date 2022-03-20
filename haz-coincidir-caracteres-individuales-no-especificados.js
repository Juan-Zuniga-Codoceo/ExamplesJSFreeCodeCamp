let quoteSample = "3 blind mice.";
let myRegex = /[^0-9^aeiou]/ig; // Cambia esta línea
let result = quoteSample.match(myRegex); // Cambia esta línea


/* Explicación:
Haz coincidir caracteres individuales no especificados
Hasta ahora, has creado un conjunto de caracteres que deseas coincidir, pero también podrías crear un conjunto de caracteres que no desees coincidir. Este tipo de conjuntos de caracteres se llaman conjuntos de caracteres negados.

Para crear un conjunto de caracteres negados colocas un carácter de intercalación (^) después del corchete de apertura y antes de los caracteres que no quieres coincidir.

Por ejemplo, /[^aeiou]/gi coincide con todos los caracteres que no son una vocal. Ten en cuenta que caracteres como ., !, [, @, / y el espacio en blanco coinciden; el conjunto de caracteres de vocal negados sólo excluye los caracteres de vocal.

Ejercicio:

Crea una sola expresión regular que coincida con todos los caracteres que no son un número o una vocal. Recuerda incluir las banderas apropiadas en la expresión regular.*/