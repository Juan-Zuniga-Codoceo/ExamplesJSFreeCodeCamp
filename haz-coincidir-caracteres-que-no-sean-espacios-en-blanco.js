let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Cambia esta línea
let result = sample.match(countNonWhiteSpace);


/* Explicación:
Haz coincidir caracteres que no sean espacios en blanco
Aprendiste a buscar espacios en blanco usando \s, con una s en minúscula. También puedes buscar todo excepto los espacios en blanco.

Busca caracteres que no sean espacios en blanco usando \S, la cual es una s mayúscula. Este patrón no coincidirá con los caracteres de espacios en blanco, retorno de carro, tabulaciones, alimentación de formulario y saltos de línea. Puedes pensar que es similar a la clase de caracteres [^ \r\t\f\n\v].

let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length;
El valor devuelto por el método .length sería 32.

Ejercicio:
Cambia la expresión regular countNonWhiteSpace para buscar varios caracteres que no sean espacios en blanco en una cadena. */