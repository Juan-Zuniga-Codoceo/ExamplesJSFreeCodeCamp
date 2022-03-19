let a = 8, b = 6;
// Cambia solo el código debajo de esta línea

[a, b] = [b, a];









/*Explicación:
Usa sintaxis de desestructuración para asignar variables desde arreglos
ES6 hace que desestructurar arreglos sea tan fácil como desestructurar objetos.

Una diferencia clave entre el operador de propagación y la desestructuración de arreglos es que el operador de propagación desempaca todos los contenidos de un arreglo en una lista separada por comas. En consecuencia, no puedes elegir qué elementos deseas asignar como variables.

Desestructurar un arreglo nos permite hacer exactamente eso:

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);
La consola mostrará los valores de a y b como 1, 2.

A la variable a se le asigna el primer valor del arreglo, y a b se le asigna el segundo valor del arreglo. También podemos acceder al valor en cualquier índice de un arreglo con la desestructuración usando comas para alcanzar el índice deseado:

const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);
La consola mostrará los valores de a, b, y c como 1, 2, 5.

Ejercicio:

Utiliza la sintaxis de desestructuración para intercambiar los valores de a y b para que a reciba el valor almacenado en b, y b reciba el valor almacenado en a.

 */