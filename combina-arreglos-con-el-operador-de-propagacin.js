function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning',...fragment,'is','fun']; // Cambia esta línea
  return sentence;
}

console.log(spreadOut());


/*Explicación:
Combina arreglos con el operador de propagación
Otra gran ventaja del operador de propagación es la capacidad de combinar arreglos, o de insertar todos los elementos de un arreglo en otro, en cualquier índice. Con sintaxis más tradicionales, podemos concatenar arreglos, pero esto sólo nos permite combinar arreglos al final de uno, y al principio de otro. La sintaxis de propagación hace la siguiente operación extremadamente simple:

let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
thatArray tendrá el valor ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander'].

Usando la sintaxis de propagación, acabamos de lograr una operación que habría sido más compleja y verbosa si hubiéramos usado métodos tradicionales.

Ejercicio:

Hemos definido una función spreadOut que devuelve la variable sentence. Modifica la función usando el operador de propagación para que devuelva el arreglo ['learning', 'to', 'code', 'is', 'fun'].

 */