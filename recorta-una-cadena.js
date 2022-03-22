function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);


/* Recorta una cadena
Recorta una cadena (primer argumento) si es más larga que la longitud máxima proporcionada (segundo argumento). Devuelve la cadena recortada con un ... al final.

Link ayuda: https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-truncate-a-string/16089

*/