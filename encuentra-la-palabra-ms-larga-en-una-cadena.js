function findLongestWordLength(str) {
 let words = str.split(' ');
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  return maxLength;

}

findLongestWordLength("The quick brown fox jumped over the lazy dog");


/* Encuentra la palabra más larga en una cadena
Devuelve la longitud de la palabra más larga en la oración proporcionada.

Tu respuesta debe ser un número.*/