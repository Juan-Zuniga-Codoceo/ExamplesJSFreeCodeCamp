function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Cambia solo el código debajo de esta línea
Dog.prototype.isPrototypeOf(beagle);




/*Entendiendo de dónde viene el prototipo de un objeto
Así como las personas heredamos genes de nuestros padres, los objetos también heredan su prototype directamente de la función constructor que lo creó. Por ejemplo, aquí el constructor Bird crea el objeto duck:

function Bird(name) {
  this.name = name;
}

let duck = new Bird("Donald");
duck hereda su prototype de la función constructor Bird. Puedes mostrar esta relación con el método isPrototypeOf:

Bird.prototype.isPrototypeOf(duck);
Este devolvería true.

Ejercicio:

Utiliza isPrototypeOf para comprobar el prototype de beagle. 

Link ayuda:https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-understand-where-an-object-s-prototype-comes-from/301330
*/