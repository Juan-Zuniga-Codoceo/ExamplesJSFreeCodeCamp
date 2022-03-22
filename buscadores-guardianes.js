function findElement(arr, func) {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }

  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

/*Buscadores guardianes
Crea una función que recorra un arreglo arr y devuelva el primer elemento que pase un "detector de verdad". Esto significa que dado un elemento x, el "detector de verdad" es pasado si func(x) es true. Si ningún elemento pasa la prueba. la función debería devolver undefined.


Link ayuda: https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-finders-keepers/16016
 */