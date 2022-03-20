const createPerson = (name, age, gender) => {
  // Cambia solo el código debajo de esta línea
  return {
    name,
    age,
    gender
  };
  // Cambia solo el código encima de esta línea
};

/* Explicación:
Escribe declaraciones concisas de objecto literales usando la abreviatura de propiedad de objeto
ES6 añade un buen soporte para definir fácilmente objetos literales.

Considera el siguiente código:

const getMousePosition = (x, y) => ({
  x: x,
  y: y
});
getMousePosition es una función simple que devuelve un objeto que contiene dos propiedades. ES6 proporciona el azúcar sintáctico para eliminar la redundancia de tener que escribir x: x. Puedes simplemente escribir x una vez, y se convertirá en x: x (o algo equivalente) de la nada. Aquí está la misma función de arriba reescrita para usar esta nueva sintaxis:

const getMousePosition = (x, y) => ({ x, y });

Ejercicio:

Utiliza la abreviatura de propiedad de objeto con objetos literales para crear y devolver un objeto con las propiedades name, age y gender.

*/

