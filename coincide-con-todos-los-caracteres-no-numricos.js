let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Cambia esta línea
let result = movieName.match(noNumRegex).length;


/* Explicación:
Coincide con todos los caracteres no numéricos
El último desafío mostró cómo buscar dígitos usando el atajo \d con una d minúscula. También puedes buscar caracteres que no sean dígitos usando un atajo similar que utilice una D mayúscula en su lugar.

El atajo para buscar caracteres que no sean dígitos es \D. Esto es igual a la clase de caracteres [^0-9], el cual busca un único carácter que no sea un número entre cero y nueve.

Ejercicio:
Usa la clase de caracteres abreviada \D para contar cuántos caracteres que no sean dígitos hay en los títulos de las películas.*/