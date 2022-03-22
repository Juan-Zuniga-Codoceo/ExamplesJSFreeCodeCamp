function frankenSplice(arr1, arr2, n) {
  let localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;
}
frankenSplice([1, 2, 3], [4, 5, 6], 1);


/*Cortar y rebanar
Tienes dos arreglos y un índice.

Copia cada elemento del primer arreglo en el segundo arreglo, en orden.

Comienza insertando elementos en el índice n del segundo arreglo.

Devuelve el arreglo resultante. Los arreglos de entrada deben permanecer iguales luego de que se ejecute la función.


Link ayuda: https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-slice-and-splice/301148
 */