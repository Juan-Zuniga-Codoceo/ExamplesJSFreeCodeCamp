let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Cambia esta línea
let result = haRegex.test(haStr);


/* Explicación: 
Especifica solo el menor número de coincidencias
Puedes especificar el número inferior y superior de patrones mediante especificadores de cantidad utilizando llaves. A veces sólo se quiere especificar el número inferior de patrones sin tener un límite superior.

Para especificar sólo el número inferior de patrones, mantén el primer número seguido de una coma.

Por ejemplo, para hacer coincidir solo con la cadena hah cuando la letra a aparezca al menos 3 veces, la expresión regular sería /ha{3,}h/.

let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4);
multipleA.test(A2);
multipleA.test(A100);
En orden, las tres llamadas a test devuelven true, false y true.

Ejercicio:
Modifica la expresión regular haRegex para coincidir con la palabra Hazzah solo cuando ésta tiene cuatro o más letras z.

*/