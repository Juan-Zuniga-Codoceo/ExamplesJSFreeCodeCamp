let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Cambia esta línea
let result = ohRegex.test(ohStr);


/*Explicación: 
Especifica el menor y mayor número de coincidencias
Recuerda que se utiliza el signo más + para buscar uno o más caracteres y el asterisco * para buscar cero o más caracteres. Esto es conveniente, pero a veces quieres coincidir con cierta gama de patrones.

Puedes especificar el número inferior y superior de patrones utilizando especificadores de cantidad. Para los especificadores de cantidad utilizamos llaves ({ y }). Pon dos números entre las llaves - para el número inferior y superior de patrones.

Por ejemplo, para que coincida con la letra a si aparece entre 3 y 5 veces en la cadena ah, la expresión regular debe ser /a{3,5}h/.

let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2);
La primera llamada a test devuelve true, mientras que la segunda devuelve false.

Ejercicio:
Modifica la expresión regular ohRegex para que coincida con toda la frase Oh no solo cuando tenga de 3 a 6 letras h.*/