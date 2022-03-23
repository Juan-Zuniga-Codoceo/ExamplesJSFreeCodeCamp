function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Cambia solo el código debajo de esta línea

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;


let duck = new Bird();
let beagle = new Dog();



/*Restablece una propiedad "constructor" heredada
Cuando un objeto hereda el prototype de otro objeto, también hereda la propiedad del constructor del supertipo.

Por ejemplo:

function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor
Pero duck y todas las instancias de Bird deberían mostrar que fueron construidas por Bird y no Animal. Para ello, puedes establecer manualmente la propiedad del constructor de Bird al objeto Bird:

Bird.prototype.constructor = Bird;
duck.constructor

Ejercicio:

Corrige el código para que duck.constructor y beagle.constructor devuelvan sus constructores respectivos.


Link ayuda: https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-reset-an-inherited-constructor-property/301324
 */