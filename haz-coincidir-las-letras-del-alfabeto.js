let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Cambia esta línea


/* Explicación:
Haz coincidir las letras del alfabeto
Has visto cómo puedes usar los conjuntos de caracteres para especificar un grupo de caracteres a coincidir, pero eso requiere escribir mucho cuando necesitas coincidir con un amplio rango de caracteres (por ejemplo, cada letra en el alfabeto). Afortunadamente, hay una funcionalidad incorporada que hace esto corto y sencillo.

Dentro de un conjunto de caracteres, puedes definir un rango de caracteres a coincidir usando un carácter de guion: -.

Por ejemplo, para hacer coincidir las letras minúsculas desde la a a la e usarías [a-e].

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);
En orden, las tres llamadas a match devolverán los valores ["cat"], ["bat"] y null.

Ejercicio:
Haz coincidir todas las letras en la cadena quoteSample.

Nota: Asegúrate de hacer coincidir tanto las letras mayúsculas como minúsculas. */