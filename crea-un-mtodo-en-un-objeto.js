let dog = {
  name: "Spot",
  numLegs: 4,
sayLegs: function (){return "This dog has "+ dog.numLegs + " legs."}
};

dog.sayLegs();



/*Explicación:
Crea un método en un objeto
Los objetos pueden tener un tipo de propiedad especial, llamada método.

Los métodos son propiedades que son funciones. Estos agregan diferentes comportamientos a los objetos. Aquí esta el ejemplo de duck con un método:

let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
duck.sayName();
Este ejemplo agrega el método sayName, el cual es una función que devuelve una oración que entrega el nombre del duck (pato). Ten en cuenta que el método accedió a la propiedad name en la sentencia de retorno usando duck.name. El siguiente desafío abarcara otra forma de hacer esto.

Ejercicio:

Usando el objeto dog, asígnale un método llamado sayLegs. El método debe devolver la frase This dog has 4 legs.

Link ayuda: https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-create-a-method-on-an-object/301318
 */