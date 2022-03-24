function splitify(str) {
  // Cambia solo el código debajo de esta línea
return str.split(/\W/);

  // Cambia solo el código encima de esta línea
}

splitify("Hello World,I-am code");


/*Divide una cadena en un arreglo utilizando el método "split"
El método split divide una cadena en un arreglo de cadenas. Se necesita un argumento para el delimitador, el cual puede ser un carácter para separar la cadena o una expresión regular. Por ejemplo, si el delimitador es un espacio, se obtiene un arreglo de palabras y si el delimitador es una cadena vacía, se obtiene un arreglo de cada carácter en la cadena.

Aquí hay dos ejemplos que dividen una cadena por espacios, luego otra por dígitos utilizando una expresión regular:

const str = "Hello World";
const bySpace = str.split(" ");

const otherString = "How9are7you2today";
const byDigits = otherString.split(/\d/);
bySpace tendrá el valor ["Hello", "World"] y byDigits tendrá el valor ["How", "are", "you", "today"].

Dado que las cadenas son inmutables, el método split facilita el trabajo con ellas.

Ejercicio:
Utiliza el método split dentro de la función splitify para dividir str en un arreglo de palabras. La función debe devolver un arreglo. Ten en cuenta que las palabras no siempre están separadas por espacios y que el arreglo no debe contener signos de puntuación.



Link ayuda:https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-split-a-string-into-an-array-using-the-split-method/18305
 */