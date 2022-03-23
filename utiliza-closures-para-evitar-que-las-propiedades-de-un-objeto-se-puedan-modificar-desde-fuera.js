function Bird() {
  let weight = 15;

  this.getWeight = function(){
    return weight;
  }

}



/*Utiliza closures para evitar que las propiedades de un objeto se puedan modificar desde fuera
En el desafío anterior, bird tenía una propiedad pública name. Se considera pública porque se puede acceder y cambiar fuera de la definición de bird.

bird.name = "Duffy";
Por lo tanto, cualquier parte de tu código puede cambiar fácilmente el nombre "name" de bird a cualquier valor. Piensa en cosas como contraseñas y cuentas bancarias que se pueden cambiar fácilmente por cualquier parte de tu base de código. Eso podría crear muchos problemas.

La forma más sencilla de hacer privada esta propiedad pública es creando una variable dentro de la función constructora. Esto cambia el alcance de esa variable para que esté dentro de la función constructora versus disponible globalmente. De este modo, la variable solo puede ser accesible y cambiable por métodos que también estén dentro de la función constructora.

function Bird() {
  let hatchedEgg = 10;

  this.getHatchedEggCount = function() { 
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount();
Aquí getHatchedEggCount es un método privilegiado, porque tiene acceso a la variable privada hatchedEgg. Esto es posible porque hatchedEgg está declarada en el mismo contexto que getHatchedEggCount. En JavaScript, una función siempre tiene acceso al contexto en el que se creó. A esto se le llama closure.

Ejercicio:

Cambia como weight es declarada en la función Bird para que sea una variable privada. Después, crea un método getWeight que devuelva el valor 15 para weight.

Link ayuda:https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-use-closure-to-protect-properties-within-an-object-from-being-modified-externally/18234 
 */