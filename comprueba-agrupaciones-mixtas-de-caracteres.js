let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/; // Cambia esta línea
let result = myRegex.test(myString); // Cambia esta línea
// Después de pasar el desafío experimenta con myString y observa cómo funciona la agrupación


/*Explicación:
Comprueba agrupaciones mixtas de caracteres
A veces queremos comprobar grupos de caracteres utilizando una expresión regular y para conseguirlo usamos paréntesis ().

Si deseas encontrar Penguin o Pumpkin en una cadena, puedes usar la siguiente expresión regular: /P(engu|umpk)in/g

Luego, comprueba si los grupos de cadena deseados están en la cadena de prueba usando el método test().

let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);
El método test aquí devolverá true.

Ejercicio:
Corrige la expresión regular para que compruebe los nombres de Franklin Roosevelt o Eleanor Roosevelt de una manera sensible a mayúsculas y minúsculas y haciendo concesiones para los segundos nombres.

Luego, corrige el código para que la expresión regular que has creado se compruebe con myString y devuelva true o false dependiendo de si la expresión regular coincide.

 */