// Configuración
const myArr = [2, 3, 4, 5, 6];

// Cambia solo el código debajo de esta línea
let total = 0
for(let i =0;i<myArr.length;i++){
  total+=(myArr[i])
}
/* Explicación: Una tarea común en JavaScript es iterar a través del contenido de un arreglo. Una forma de hacerlo es con un bucle for. Este código mostrará cada elemento del arreglo arr en la consola:

const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
Recuerda que los arreglos tienen una indexación basada en cero, lo que significa que el último índice del arreglo es igual a su longitud menos uno (length - 1). Nuestra condición para este bucle es i < arr.length, que detiene el bucle cuando i es igual a length. En este caso, la última iteración es i === 4, es decir, cuando i se convierte en igual a arr.length - 1 y resultados 6 a la consola. Entonces i aumenta a 5, y el bucle termina i < arr.length es false.
Ejercicio
Declara e inicializa una variable total a 0. Usa un bucle for para sumar el valor de cada elemento del arreglo myArr al total.*/