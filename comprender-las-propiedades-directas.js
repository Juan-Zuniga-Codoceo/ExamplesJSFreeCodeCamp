function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Cambia solo el código debajo de esta línea
for (let property in canary){
  if(canary.hasOwnProperty(property)){
    ownProps.push(property);
  }
}


/* Explicación: 
Comprender las propiedades directas
En el siguiente ejemplo, el constructor Bird define dos propiedades: name y numLegs:

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");
name y numLegs se llaman propiedades directas, porque están definidas directamente en la instancia del objeto. Eso significa que duck y canary tienen su propia copia separada de estas propiedades. De hecho, cada instancia de Bird tendrá su propia copia de estas propiedades. El siguiente código añade todas las propiedades directas de duck al arreglo ownProps:

let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);
La consola mostrará el valor ["name", "numLegs"].

Ejercicio:

Agrega todas las propiedades directas de canary al arreglo ownProps.

Link ayuda: https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-understand-own-properties/301326
*/