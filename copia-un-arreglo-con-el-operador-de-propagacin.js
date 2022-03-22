function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Cambia solo el código debajo de esta línea
newArr.push([...arr]);
    // Cambia solo el código encima de esta línea
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));

/*Explicación:
Copia un arreglo con el operador de propagación
Mientras que slice() nos permite ser selectivos sobre qué elementos de un arreglo copiar, entre otras tareas útiles, el nuevo operador de propagación de ES6 nos permite copiar fácilmente todos los elementos de una arreglo, en orden, con una sintaxis simple y altamente legible. La sintaxis de propagación simplemente se ve así: ...

En la práctica, podemos utilizar el operador de propagación para copiar un arreglo de esta manera:

let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
thatArray es igual a [true, true, undefined, false, null]. thisArray permanece sin cambios y thatArray contiene los mismos elementos que thisArray.

Ejercicio:

Hemos definido una función, copyMachine que toma arr (un arreglo) y num (un número) como argumentos. Se supone que la función devuelve un nuevo arreglo compuesto por num copias de arr. Hemos hecho la mayor parte del trabajo por ti, pero aún no funciona del todo bien. Modifica la función usando sintaxis de propagación para que funcione correctamente (sugerencia: ¡otro método que ya hemos cubierto podría ser útil aquí!).

 */