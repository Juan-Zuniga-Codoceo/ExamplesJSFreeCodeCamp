let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Cambia solo el código debajo de esta línea
userObj.data.friends.push(friend);
return userObj.data.friends;
  // Cambia solo el código encima de esta línea
}

console.log(addFriend(user, 'Pete'));


/* Explicación:
Modifica un arreglo almacenado en un objeto
Ahora ya has visto todas las operaciones básicas de los objetos de JavaScript. Puedes agregar, modificar y eliminar pares clave-valor, comprobar si las claves existen e iterar sobre todas las claves de un objeto. A medida que sigas aprendiendo JavaScript verás aplicaciones aún más versátiles de los objetos. Además, las lecciones de Estructuras de Datos ubicadas en la sección Coding Interview Prep del plan de estudios también cubren los objetos Map y Set de ES6, los cuales son similares a los objetos ordinarios, pero proporcionan algunas características adicionales. Ahora que has aprendido los fundamentos de los arreglos y los objetos, ¡estás totalmente preparado para empezar a abordar problemas más complejos con JavaScript!

Ejercicio:

Echa un vistazo al objeto que hemos proporcionado en el editor de código. El objeto user contiene tres claves. La clave data contiene cinco claves, una de las cuales contiene un arreglo de friends. A partir de esto, puedes ver lo flexibles que son los objetos como estructuras de datos. Hemos empezado a escribir una función addFriend. Termina de escribirla para que tome un objeto user y agregue el nombre del argumento friend al arreglo almacenado en user.data.friends y devuelva ese arreglo.
 */