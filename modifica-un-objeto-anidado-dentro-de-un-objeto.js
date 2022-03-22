let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// Cambia solo el código debajo de esta línea
userActivity.data.online=45;
// Cambia solo el código encima de esta línea

console.log(userActivity);


/*Explicación:
Modifica un objeto anidado dentro de un objeto
Veamos ahora un objeto un poco más complejo. Las propiedades de los objetos pueden anidarse a una profundidad arbitraria, y sus valores pueden ser cualquier tipo de datos soportados por JavaScript, incluyendo arreglos e incluso otros objetos. Considera lo siguiente:

let nestedObject = {
  id: 28802695164,
  date: 'December 31, 2016',
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8
    }
  }
};
nestedObject tiene tres propiedades: id (el valor es un número), date (el valor es una cadena), y data (el valor es un objeto con su estructura anidada). Aunque las estructuras pueden volverse rápidamente complejas, podemos seguir utilizando las mismas notaciones para acceder a la información que necesitamos. Para asignar el valor 10 a la propiedad busy del objeto anidado onlineStatus, utilizamos la notación de puntos para referenciar la propiedad:

nestedObject.data.onlineStatus.busy = 10;

Ejercicio:

Aquí hemos definido un objeto userActivity, que incluye otro objeto anidado dentro de él. Establece el valor de la clave online en 45.
 */