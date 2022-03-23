let funModule = (function() {
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      };
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      };
    }
  };
})();

/*Utiliza una IIFE para crear un módulo
Una expresión de función inmediatamente invocada (IIFE) se utiliza a menudo para agrupar la funcionalidad relacionada en un solo objeto o módulo. Por ejemplo, en el desafío anterior se definieron dos "mixins":

function glideMixin(obj) {
  obj.glide = function() {
    console.log("Gliding on the water");
  };
}
function flyMixin(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  };
}
Podemos agrupar estos mixins en un módulo:

let motionModule = (function () {
  return {
    glideMixin: function(obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
})();
Ten en cuenta que has invocado una IIFE que devuelve un objeto motionModule. El objeto devuelto contiene todos los comportamientos de los mixins como propiedades del objeto. La ventaja del patrón del módulo es que todos los comportamientos de movimiento pueden ser empaquetados en un solo objeto que puede ser usado por otras partes del código. Así se debe utilizar:

motionModule.glideMixin(duck);
duck.glide();

Ejercicio:

Crea un módulo llamado funModule para envolver los dos mixins isCuteMixin y singMixin. funModule debe devolver un objeto.

Link ayuda: https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-use-an-iife-to-create-a-module/301332
 */