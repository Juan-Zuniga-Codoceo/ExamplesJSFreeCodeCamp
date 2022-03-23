function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Cambia solo el código debajo de esta línea
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function(){
  console.log("Woof!");
}


// Cambia solo el código encima de esta línea

let beagle = new Dog();

/*Añade métodos después de la herencia
Una función constructor que hereda su objeto prototype de una función constructor "supertype" puede seguir teniendo sus propios métodos además de los heredados.

Por ejemplo, Bird es un constructor que hereda su prototype de Animal:

function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
Además de lo que se hereda de Animal, se quiere añadir un comportamiento que sea exclusivo de los objetos Bird. Aquí, Bird obtendrá una función fly(). Las funciones se añaden al prototype de Bird's del mismo modo que cualquier función constructor:

Bird.prototype.fly = function() {
  console.log("I'm flying!");
};
Ahora las instancias de Bird tendrán métodos tanto eat() como fly():

let duck = new Bird();
duck.eat();
duck.fly();
duck.eat() mostrará la cadena nom nom nom en consola, y duck.fly() mostrará la cadena I'm flying!.

Ejercicio:

Añade el código necesario para que el objeto Dog herede de Animal y el constructor prototype de Dog sea establecido en Dog. A continuación agrega el método bark() al objeto Dog, para que beagle pueda "comer" eat() y "ladrar" bark(). El método bark() debe imprimir Woof! por consola.


Link ayuda: https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-add-methods-after-inheritance/301315
 */