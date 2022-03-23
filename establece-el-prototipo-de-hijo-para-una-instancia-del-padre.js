function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Cambia solo el código debajo de esta línea


let beagle = new Dog();
Dog.prototype = Object.create(Animal.prototype);


/* Establece el prototipo de hijo para una instancia del padre
En el desafío anterior, viste el primer paso para heredar el comportamiento del supertipo (o padre) Animal: creando una nueva instancia de Animal.

Este desafío cubre el siguiente paso: establecer el prototipo prototype del subtipo (o hijo) —en este caso, Bird— para ser una instancia de Animal.

Bird.prototype = Object.create(Animal.prototype);
Recuerda que el prototipo prototype es como la "receta" para crear un objeto. En cierto modo, la receta de Bird ahora incluye todos los "ingredientes" clave de Animal.

let duck = new Bird("Donald");
duck.eat();
duck hereda todas las propiedades de Animal, incluyendo el método eat.

Ejercicio:

Modifica el código para que las instancias de Dog hereden de Animal.

Link ayuda: https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-set-the-childs-prototype-to-an-instance-of-the-parent/301325
*/