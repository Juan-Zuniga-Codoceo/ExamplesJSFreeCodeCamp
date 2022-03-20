let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Cambia esta línea
let result = movieName.match(numRegex).length;


/* Explicación: 
Coincide con todos los números
Has aprendido atajos para patrones de cadenas comunes como los alfanuméricos. Otro patrón común es buscar solo dígitos o números.

El atajo para buscar caracteres de dígitos es \d, con una d minúscula. Esto es igual a la clase de caracteres [0-9], la cual busca un solo carácter de cualquier número entre cero y nueve.

Ejercicio:

Usa la clase de caracteres abreviada \d para contar cuántos dígitos hay en los títulos de las películas. Los números escritos ("seis" en lugar de 6) no cuentan.

*/