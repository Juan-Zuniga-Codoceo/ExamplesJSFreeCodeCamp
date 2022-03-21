let favWord = "favorite";
let favRegex = /favou?rite/; // Cambia esta línea
let result = favRegex.test(favWord);


/*Explicación:
Comprueba todos o ninguno
A veces los patrones que quieres buscar pueden tener partes que pueden o no existir. Sin embargo, podría ser importante buscarlos de todos maneras.

Puedes especificar la posible existencia de un elemento con un signo de interrogación, ?. Esto comprueba cero o uno de los elementos precedentes. Puedes pensar que este símbolo dice que el elemento anterior es opcional.

Por ejemplo, hay ligeras diferencias en inglés americano y británico y puedes usar el signo de interrogación para coincidir con ambas ortografías.

let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american);
rainbowRegex.test(british);
Ambos usos del método test devolverán true.

Ejercicio:
Cambia la expresión regular favRegex para que coincida tanto la versión del inglés americano (favorite) como la versión del inglés británico de la palabra (favourite).

 */