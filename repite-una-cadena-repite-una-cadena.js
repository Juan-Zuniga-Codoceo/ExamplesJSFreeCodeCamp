function repeatStringNumTimes(str, num) {
 let accumulatedStr = "";

  for (let i = 0; i < num; i++) {
    accumulatedStr += str;
  }

  return accumulatedStr;
}
repeatStringNumTimes("abc", 3);


/* Repite una cadena repite una cadena
Repite una cadena dada str (primer argumento) por un número (num) de veces (segundo argumento). Devuelve una cadena vacía si num no es un número positivo. Para este desafío, no utilices el método incorporado .repeat().


link ayuda: https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-repeat-a-string-repeat-a-string/16041
*/