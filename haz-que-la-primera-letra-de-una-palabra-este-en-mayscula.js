function titleCase(str) {
 const newTitle = str.split(" ");
  const updatedTitle = [];
  for (let st in newTitle) {
    updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
  }
  return updatedTitle.join(" ");
} 
titleCase("I'm a little tea pot");


/*Haz que la primera letra de una palabra este en mayúscula
Devuelve la cadena proporcionada con la primera letra de cada palabra en mayúsculas. Asegúrate de que el resto de la palabra esté en minúsculas.

Como propósito de este ejercicio, debes también usar mayúsculas conectando palabras como the y of. 


Link ayuda: https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-title-case-a-sentence/16088

*/