function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;


// Cambia solo el código encima de esta línea
let beagle = new Dog("Snoopy");



/*Explicación:
Utiliza propiedades "prototype" para reducir código duplicado
Dado que numLegs probablemente tendrán el mismo valor para todas las instancias de Bird, esencialmente tienes una variable duplicada numLegs dentro de cada instancia de Bird.

Esto puede que no sea un problema cuando sólo hay dos instancias, pero imagina si hay millones de instancias. Eso sería un montón de variables duplicadas.

Una mejor forma es utilizar el prototype de Bird. Las propiedades del prototype se comparten entre TODAS las instancias de Bird. A continuación se explica cómo añadir numLegs al prototipo Bird prototype:

Bird.prototype.numLegs = 2;
Ahora todas las instancias de Bird tienen la propiedad numLegs.

console.log(duck.numLegs);
console.log(canary.numLegs);
Dado que todas las instancias tienen automáticamente las propiedades en el prototype, piensa en prototype como una "receta" para crear objetos. Ten en cuenta que el prototype de duck y canary es parte del constructor Bird como Bird.prototype. Casi todos los objetos en JavaScript tienen una propiedad prototype que es parte de la función constructora que lo creó.

Ejercicio:

Añade una propiedad numLegs al prototype de Dog 

Link ayuda: https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-use-prototype-properties-to-reduce-duplicate-code/301336
*/