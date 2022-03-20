// Cambia solo el código debajo de esta línea
class Vegetable {
  constructor(name){
    this.name = name;
  }
}

// Cambia solo el código encima de esta línea

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Debería mostrar 'carrot'


/* Explicación: 
Usa sintaxis de clases para definir una función constructora
ES6 proporciona una nueva sintaxis para crear objetos, usando la palabra clave class.

Debemos notar que la sintaxis class es sólo sintaxis, y no una implementación completa basada en clases de un paradigma orientado a objetos, a diferencia de lenguajes como Java, Python, Ruby, etc.

En ES5, normalmente definimos una función constructor y usamos la palabra clave new para instanciar un objeto.

var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
La sintaxis class simplemente reemplaza la creación de la función constructor:

class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');
Debe tenerse en cuenta que la palabra clave class declara una nueva función, a la cual se añade un constructor. Este constructor se invoca cuando new es llamado para crear un nuevo objeto.

Nota: UpperCamelCase debe ser utilizado por convención para nombres de clase en ES6, como SpaceShuttle fue usado arriba.

El método constructor es un método especial para crear e inicializar un objeto creado con una clase. Aprenderás más sobre ello en la sección de Programación Orientada a Objetos de la Certificación en Algoritmos de JavaScript y Estructuras de Datos.

Ejercicio:
Usa la palabra clave class y escribe un constructor para crear la clase Vegetable.

La clase Vegetable te permite crear un objeto vegetal con una propiedad name que es pasada al constructor.

*/