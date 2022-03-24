// La variable global
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  var newArray = [];
  // Cambia solo el código debajo de esta línea
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i]) === true) {
      newArray.push(this[i]);
    }
  }
  // Cambia solo el código encima de esta línea
  return newArray;
};

const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});



/*Implementa el método filter en un prototipo
Puedes aprender mucho sobre el método filter si implementas tu propia versión. Se recomienda utilizar un bucle for o Array.prototype.forEach().

Ejercicio:

Escribe tu propio Array.prototype.myFilter(), que debe comportarse exactamente como Array.prototype.filter(). No debes utilizar el método incorporado filter. Se puede acceder a la instancia Array en el método myFilter usando this.

Link ayuda:https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-implement-the-filter-method-on-a-prototype/301231
 */