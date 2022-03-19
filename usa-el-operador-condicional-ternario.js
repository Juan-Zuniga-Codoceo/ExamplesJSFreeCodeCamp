function checkEqual(a, b) {
return a===b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);



/* Explicación:
Usa el operador condicional (ternario)
El operador condicional, también llamado el operador ternario, puede utilizarse como una expresión if-else de una sola línea.

La sintaxis es a ? b : c, donde a es la condición, b es el código a ejecutar cuando la condición devuelve true, y c es el código a ejecutar cuando la condición devuelve false.

La siguiente función utiliza una sentencia if/else para comprobar una condición:

function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater or equal";
  }
}
Esto puede reescribirse usando el operador condicional:

function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}

Ejercicio:
Utiliza el operador condicional en la función checkEqual para comprobar si dos números son iguales o no. La función debe devolver la cadena Equal o la cadena Not Equal.*/

