function largestOfFour(arr) {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    results[i] = largestNumber;
  }

  return results;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

/*Devuelve los números mayores en los arreglos
Devuelve un arreglo que consista en el mayor número de cada sub-arreglo proporcionado. Por simplicidad, el arreglo dado contendrá exactamente 4 sub-arreglos.

Recuerda, puedes iterar a través de un arreglo utilizando un simple bucle for, y acceder a cada miembro del arreglo con la sintaxis arr[i].

Link ayuda: https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-return-largest-numbers-in-arrays/16042
 */