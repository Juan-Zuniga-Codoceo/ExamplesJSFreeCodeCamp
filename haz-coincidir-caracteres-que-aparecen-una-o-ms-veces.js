let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Cambia esta línea
let result = difficultSpelling.match(myRegex);


/* Explicación: 
Haz coincidir caracteres que aparecen una o más veces
A veces, es necesario coincidir con un carácter (o grupo de caracteres) que aparezca una o más veces seguidas. Esto significa que aparece al menos una vez, y puede repetirse.

Puedes usar el carácter + para comprobar si es así. Recuerda, el carácter o patrón debe estar presente consecutivamente. Es decir, el carácter tiene que repetirse uno tras otro.

Por ejemplo, /a+/g encontraría una coincidencia en abc y regresaría ["a"]. Debido al +, también encontraría una sola coincidencia en aabc y regresaría ["aa"].

Si en su lugar estuvieras comprobando la cadena abab, se encontrarían dos coincidencias y regresaría ["a", "a"] porque los caracteres a no están en fila; hay una b entre ellos. Finalmente, dado que no hay una a en la cadena bcd, no se encontraría una coincidencia.

Ejercicio:
Quieres encontrar coincidencias cuando la letra s ocurre una o más veces en Mississippi. Escribe una expresión regular que utilice el signo +.*/