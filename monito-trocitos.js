function chunkArrayInGroups(arr, size) {
  let temp = [];
  let result = [];

  for (let a = 0; a < arr.length; a++) {
    if (a % size !== size - 1) temp.push(arr[a]);
    else {
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0) result.push(temp);
  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);


/*Monito Trocitos
Escribe una función que divida un arreglo (primer argumento) en grupos de la longitud size (segundo argumento) y los devuelva como un arreglo bidimensional.

Link ayuda: https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-chunky-monkey/16005

 */