function Dog(name) {
  this.name = name;
}

// Cambia solo el código debajo de esta línea
function joinDogFraternity(candidate) {
if (candidate.constructor === Dog){
  return true;
}else{
  return false;
}
}


/*Entiende la propiedad constructor
Hay una propiedad especial constructor ubicada en instancias de objeto duck y beagle que fueron creados en desafíos anteriores:

let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird); 
console.log(beagle.constructor === Dog);
Ambas llamadas console.log devolverían true en la consola.

Ten en cuenta que la propiedad constructor hace referencia a la función constructor que creo la instancia. La ventaja de la propiedad constructor es que es posible verificar esta propiedad para averiguar qué tipo de objeto es. Así es como se podría utilizar:

function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}
Nota: dado que la propiedad constructor se puede sobreescribir (se verá en los próximos dos desafíos), por lo general, es mejor utilizar el método instanceof para verificar el tipo de un objeto.

Escribe una función joinDogFraternity que tome como parámetro candidate y que con la propiedad constructor, devuelva true si el candidato es un Dog y si no lo es debería devolver false.

Link ayuda: https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-understand-the-constructor-property/301327
 */