function zeroArray(m, n) {
  // Crea un arreglo de 2 dimensiones con m filas y n columnas de ceros
  let newArray = [];
  
  for (let i = 0; i < m; i++) {
    // Agrega la fila número m a newArray
    let row = [];
    for (let j = 0; j < n; j++) {
      // Inserta n ceros a la fila actual para crear las columnas
      row.push(0);
    }
    // Inserta la fila actual, que ahora contiene n ceros, al arreglo
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);


/*Explicación:
Ten cuidado al reinicializar variables dentro de un bucle
A veces es necesario guardar información, incrementar contadores o reajustar variables dentro de un bucle. Un problema potencial es cuando las variables deberían ser reiniciadas y no lo son, o viceversa. Esto es particularmente peligroso si accidentalmente se restablece la variable que se utiliza para la condición terminal, causando un bucle infinito.

La impresión de los valores de las variables con cada ciclo de su bucle mediante el uso de console.log() puede descubrir un comportamiento erróneo relacionado con el restablecimiento, o la falta de restablecimiento de una variable.

Ejercicio:

La siguiente función debe crear un arreglo bidimensional (matriz) con m filas (rows) y n columnas (columns) de ceros. Desafortunadamente, no está produciendo la salida esperada porque la variable row no está siendo reiniciada (devuelta a un arreglo vacío) en el bucle exterior. Corrige el código para que devuelva una matriz 3x2 de ceros correcta, que se parezca a [[0, 0], [0, 0], [0, 0]]. */