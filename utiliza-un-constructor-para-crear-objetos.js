function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Cambia solo el código debajo de esta línea
let hound = new Dog();

/* Explicación: 
Utiliza un constructor para crear objetos
Aquí tenemos el constructor Bird del desafío anterior:

function Bird() {
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
}

let blueBird = new Bird();
NOTA: this dentro del constructor siempre se refiere al objeto que se está creando.

Observa que se utiliza el operador new cuando llamamos a un constructor. Esto le indica a JavaScript que cree una nueva instancia de Bird llamada blueBird. Sin el operador new, dentro del constructor this no haría referencia al nuevo objeto, dando resultados inesperados. Ahora blueBird tiene todas las propiedades definidas dentro del constructor Bird:

blueBird.name;
blueBird.color;
blueBird.numLegs;
Al igual que cualquier otro objeto, sus propiedades pueden ser accedidas y modificadas:

blueBird.name = 'Elvira';
blueBird.name;

Ejercicio:

Utiliza el constructor Dog de la última lección para crear una nueva instancia de Dog, asignándolo a una variable hound.

Link ayuda: https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-use-a-constructor-to-create-objects/18233
*/