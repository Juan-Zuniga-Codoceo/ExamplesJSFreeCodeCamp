function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Cambia solo el código debajo de esta línea

let duck = Object.create(Animal.prototype); // Cambia esta línea
let beagle = Object.create(Animal.prototype); // Cambia esta línea




/*Hereda comportamientos de un supertipo (supertype)
En el desafío anterior, creaste un supertype llamado Animal que definía comportamientos compartidos por todos los animales:

function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
Este desafío y el siguiente cubrirán como reutilizar los métodos de Animal dentro de Bird y Dog sin tener que definirlos otra vez. Se utiliza una técnica llamada herencia. Este desafío cubre el primer paso: crear una instancia del supertype (o objecto padre). Ya conoces una forma de crear una instancia de Animal utilizando el operador new:

let animal = new Animal();
Hay algunas desventajas cuando se utiliza esta sintaxis para la herencia, pero son demasiado complejas para el alcance de este desafío. En su lugar, hay un enfoque alternativo que no tiene esas desventajas:

let animal = Object.create(Animal.prototype);
Object.create(obj) crea un objeto nuevo y establece obj como el prototype del nuevo objeto. Recuerda que prototype es como la "receta" para crear un objecto. Al establecer el prototype de animal como el prototype de Animal, estás dándole a la instancia animal la misma “receta" que a cualquier otra instancia de Animal.

animal.eat();
animal instanceof Animal;
Aquí el método instanceof devolvería true.

Ejercicio:

Utiliza Object.create para crear dos instancias de Animal llamadas duck y beagle.


Link ayuda: https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-inherit-behaviors-from-a-supertype/301319
 */