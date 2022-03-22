function filteredArray(arr, elem) {
  let newArr = [];
  // Cambia solo el código debajo de esta línea
for (let i=0;i<arr.length;i++){
  if (arr[i].indexOf(elem) == -1) {
    newArr.push(arr[i]);
  }
}
  // Cambia solo el código encima de esta línea
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));


/* Explicación:
Itera a través de todos los elementos de un arreglo utilizando bucles "for"
A veces, cuando se trabaja con arreglos, es muy útil poder iterar a través de cada elemento para encontrar uno o más elementos que podamos necesitar, o manipular un arreglo en función de los elementos de datos que cumplen un determinado conjunto de criterios. JavaScript ofrece varios métodos incorporados que iteran sobre arreglos de formas ligeramente diferentes para conseguir distintos resultados (como every(), forEach(), map(), etc.), sin embargo, la técnica que es más flexible y nos ofrece la mayor cantidad de control es un simple bucle for.

Considera lo siguiente:

function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
Usando un bucle for, esta función itera y accede a cada elemento del arreglo, y lo somete a una simple prueba que hemos creado. De esta manera, hemos determinado de forma sencilla y programática qué elementos de datos son mayores que 10, y hemos devuelto un nuevo arreglo, [12, 14, 80], que contiene esos elementos.

Ejercicio:

Hemos definido una función, filteredArray, que toma arr, un arreglo anidado, y elem como argumentos, y devuelve un nuevo arreglo. elem representa un elemento que puede o no estar presente en uno o más de los arreglos anidados dentro de arr. Modifica la función, usando un bucle for, para que devuelva una versión filtrada del arreglo pasado de forma que cualquier arreglo anidado dentro de arr que contenga elem haya sido eliminado.

*/