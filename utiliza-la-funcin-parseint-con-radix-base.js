function convertToInteger(str) {
 return parseInt(str,2);
}

convertToInteger("10011");


/*Explicación:
Utiliza la función "parseInt" con Radix (Base)
La función parseInt() analiza una cadena y devuelve un entero. Recibe un segundo argumento para la base (radix), que especifica la base del número representado en la cadena. La base (radix) puede ser un número entero entre 2 y 36.

La llamada a la función se realiza de la siguiente manera:

parseInt(string, radix);
Y aquí hay un ejemplo:

const a = parseInt("11", 2);
La variable radix indica que 11 está en el sistema binario, o base 2. Este ejemplo convierte la cadena 11 a un entero 3.

Ejercicio:
Utiliza parseInt() en la función convertToInteger para convertir un número binario en un número entero, y devolverlo.*/