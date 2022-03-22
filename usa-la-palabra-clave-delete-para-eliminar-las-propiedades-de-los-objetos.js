let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Cambia solo el código debajo de esta línea
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
// Cambia solo el código encima de esta línea

console.log(foods);

/*Explicación:
Usa la palabra clave "delete" para eliminar las propiedades de los objetos
Ahora ya sabes qué son los objetos y sus características y ventajas básicas. En resumen, son almacenes clave-valor que proporcionan una forma flexible e intuitiva de estructurar los datos, y, proporcionan un tiempo de búsqueda muy rápido. A lo largo del resto de estos desafíos, describiremos varias operaciones comúnes que puedes realizar sobre los objetos para que te sientas cómodo aplicando estas útiles estructuras de datos en tus programas.

En desafíos anteriores, hemos agregado y modificado los pares clave-valor de un objeto. Aquí veremos cómo podemos eliminar un par clave-valor de un objeto.

Volvamos a nuestro ejemplo del objeto foods una última vez. Si quisiéramos eliminar la clave apples, podemos eliminarla utilizando la palabra clave delete de esta manera:

delete foods.apples;

Ejercicio:

Usa la palabra clave delete para eliminar las claves oranges, plums y strawberries del objeto foods.

 */