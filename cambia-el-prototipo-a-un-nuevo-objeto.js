function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Cambia solo el código debajo de esta línea
numLegs: 4,
  eat: function(){
  console.log();
},
  describe: function(){
  console.log();
}
};


/*Cambia el prototipo a un nuevo objeto
Hasta ahora, has estado agregando propiedades al prototype (prototipo) individualmente:

Bird.prototype.numLegs = 2;
Esto se vuelve tedioso después de varias propiedades.

Bird.prototype.eat = function() {
  console.log("nom nom nom");
}

Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
}
Una forma más eficiente es establecer el prototype a un nuevo objeto que ya contenga las propiedades. De esta forma, las propiedades son añadidas todas a la vez:

Bird.prototype = {
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
Ejercicio:

Agrega la propiedad numLegs, y los dos métodos eat() y describe() al prototype de Dog, estableciendo prototype a un nuevo objeto.

Link ayuda: https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-change-the-prototype-to-a-new-object/301316
 */ 