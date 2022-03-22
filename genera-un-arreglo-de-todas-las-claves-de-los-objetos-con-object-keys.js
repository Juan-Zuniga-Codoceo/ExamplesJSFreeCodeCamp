let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // Cambia solo el código debajo de esta línea
return Object.keys(obj);
  // Cambia solo el código encima de esta línea
}

console.log(getArrayOfUsers(users));

/*Genera un arreglo de todas las claves de los objetos con Object.keys()
También podemos generar un arreglo que contenga todas las claves almacenadas en un objeto utilizando el método Object.keys() y pasando un objeto como argumento. Esto devolverá un arreglo con cadenas que representan cada propiedad del objeto. De nuevo, no habrá un orden específico para las entradas en el arreglo.

Ejercicio:

Termina de escribir la función getArrayOfUsers para que devuelva un arreglo que contenga todas las propiedades del objeto que recibe como argumento.
 */