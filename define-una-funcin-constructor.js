function Dog(){
  this.name = "Mayte";
  this.color = "Brown";
  this.numLegs = 4;
}





/*Explicación: 
Define una función "Constructor"
Las funciones Constructors crean nuevos objetos. Definen propiedades y comportamientos que pertenecerán al nuevo objeto. Piensa que son el modelo para la creación de nuevos objetos.

A continuación se muestra un ejemplo de un constructor:

function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}
Este constructor define un objeto Bird con las propiedades name, color y numLegs establecidas a Albert, blue y 2 respectivamente. Los constructores tienen las siguientes convenciones:

Están definidos con un nombre en mayúscula para distinguirlos de otras funciones que no son constructors.
Utilizan la palabra clave this para establecer propiedades del objeto que crearán. Dentro del constructor, this se refiere al nuevo objeto que creará.
Los Constructors definen propiedades y comportamientos en vez de devolverlos como un valor como lo harían otras funciones.

Ejercicio:
Crea un constructor, Dog, con las propiedades name, color y numLegs que se establecen a una cadena, una cadena y un número respectivamente.

Link ayuda: https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-define-a-constructor-function/16804
*/