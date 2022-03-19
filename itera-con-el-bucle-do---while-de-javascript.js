// Configuración
const myArray = [];
let i = 10;

// Cambia solo el código debajo de esta línea
do {
  myArray.push(i);
  i++;
} while (i <= 10);

/* Explicación: Itera con el bucle "do...while" de JavaScript
El siguiente tipo de bucle que aprenderás se llama bucle do...while. Se llama bucle do...while porque primero hace (do) una pasada por el código dentro del bucle sin importar qué, y luego continua ejecutando el bucle mientras (while) la condición especificada sea verdadera (true).

const ourArray = [];
let i = 0;

do {
  ourArray.push(i);
  i++;
} while (i < 5);
El ejemplo anterior se comporta de forma similar a otros tipos de bucles, siendo el arreglo resultante [0, 1, 2, 3, 4]. Sin embargo, lo que hace que el bucle do...while sea diferente a otros bucles es cómo se comporta cuando la condición falla en la primera verificación. Veamos esto en acción: Aquí puedes ver un bucle while que ejecutará el código una y otra vez siempre que i < 5:

const ourArray = []; 
let i = 5;

while (i < 5) {
  ourArray.push(i);
  i++;
}
En este ejemplo, inicializamos el valor de ourArray a un arreglo vacío y el valor de i a 5. Cuando ejecutamos el bucle while, la condición se evalúa como false porque i no es inferior a 5, así que no ejecutamos el código dentro del bucle. El resultado es que ourArray terminará sin valores añadidos, y todavía se verá como [] una vez el código del ejemplo anterior haya terminado de ejecutarse. Ahora, dale un vistazo a un bucle do...while:

const ourArray = []; 
let i = 5;

do {
  ourArray.push(i);
  i++;
} while (i < 5);
En este caso, inicializamos el valor de i a 5, tal como lo hicimos en el bucle while. Cuando lleguemos a la siguiente línea, no hay ninguna condición para evaluar, así que entramos al código dentro de las llaves y se ejecuta. Añadiremos un único elemento al arreglo y luego incrementaremos i antes de llegar a la verificación de la condición. Cuando finalmente evaluamos la condición i < 5 en la última línea, vemos que el valor de i es ahora 6, por lo que falla la comprobación condicional. Salimos del bucle y hemos terminado. Al final del ejemplo anterior, el valor de ourArray es [5]. Esencialmente, un bucle do...while asegura que el código dentro del bucle se ejecute al menos una vez. Intentemos construir un bucle do...while para que funcione empujando valores a un arreglo.

Ejercicio:
Cambia el bucle while en el código por un bucle do...while. El bucle solo enviará el número 10 a myArray, e i será igual a 11 cuando tu código haya terminado de ejecutarse.*/

