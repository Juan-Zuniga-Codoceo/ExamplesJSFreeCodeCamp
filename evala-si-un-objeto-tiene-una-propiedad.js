let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  // Cambia solo el código debajo de esta línea
if (
    userObj.hasOwnProperty("Alan") &&
    userObj.hasOwnProperty("Jeff") &&
    userObj.hasOwnProperty("Sarah") &&
    userObj.hasOwnProperty("Ryan")
  ) {
    return true;
  }
  return false;
}
  // Cambia solo el código encima de esta línea


console.log(isEveryoneHere(users));

/*Explicación: 
Evalúa si un objeto tiene una propiedad
Ahora podemos agregar, modificar y eliminar claves de los objetos. Pero, ¿y si sólo queremos saber si un objeto tiene una propiedad específica? JavaScript nos proporciona dos maneras diferentes de hacerlo. Uno utiliza el método hasOwnProperty() y el otro utiliza la palabra clave in. Si tenemos un objeto users con una propiedad de Alan, podríamos comprobar su presencia de cualquiera de las siguientes maneras:

users.hasOwnProperty('Alan');
'Alan' in users;
Ambos devuelven true.

Ejercicio:
Termina de escribir la función para que devuelva "true" sólo si el objeto pasado contiene los cuatro nombres, Alan, Jeff, Sarah y Ryan, y devuelve false de lo contrario.

*/