let myNestedArray = [
  // Cambia solo el código debajo de esta línea
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array',['deep']],
  ['mutate', 1327.98, 'splice', 'slice', 'push',[['deeper']]],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth',[[['deepest']]]]

  // Cambia solo el código encima de esta línea
];



/*Explicación:
Crea arreglos complejos multidimensionales
¡Fantástico! ¡Acabas de aprender un montón sobre arreglos! Esta ha sido una visión general de alto nivel, y hay mucho más que aprender sobre el trabajo con arreglos, mucho de lo cual verás en secciones posteriores. Pero antes de pasar a ver los Objetos, vamos a echar un vistazo más, y ver cómo los arreglos pueden llegar a ser un poco más complejos de lo que hemos visto en los desafíos anteriores.

Una de las características más poderosas cuando se piensa en los arreglos como estructuras de datos, es que los arreglos pueden contener, o incluso estar completamente formados por otros arreglos. Hemos visto arreglos que contienen arreglos en desafíos anteriores, pero bastante simples. Sin embargo, los arreglos pueden contener una profundidad infinita de arreglos que pueden contener otros arreglos, cada uno con sus propios niveles arbitrarios de profundidad, y así sucesivamente. De esta manera, un arreglo puede convertirse rápidamente en una estructura de datos muy compleja, conocido como multidimensional, o arreglo anidado. Considera el siguiente ejemplo:

let nestedArray = [
  ['deep'],
  [
    ['deeper'], ['deeper'] 
  ],
  [
    [
      ['deepest'], ['deepest']
    ],
    [
      [
        ['deepest-est?']
      ]
    ]
  ]
];
El arreglo deep está anidado a 2 niveles de profundidad. El arreglo deeper está a 3 niveles de profundidad. Los arreglos deepest están anidados a 4 niveles y el arreglo deepest-est? a 5.

Si bien este ejemplo puede parecer complicado, este nivel de complejidad no es desconocido, ni siquiera inusual, cuando se trata de grandes cantidades de datos. Sin embargo, todavía podemos acceder muy fácilmente a los niveles más profundos de un arreglo tan complejo con notación de corchetes:

console.log(nestedArray[2][1][0][0][0]);
Esto registra la cadena deepest-est?. Y ahora que sabemos dónde está ese dato, podemos restablecerlo si es necesario:

nestedArray[2][1][0][0][0] = 'deeper still';

console.log(nestedArray[2][1][0][0][0]);
Ahora registra deeper still.

Ejercicio:

Hemos definido una variable, myNestedArray, como un arreglo. Modifica myNestedArray, utilizando cualquier combinación de cadenas, números y booleanos para los elementos de datos, de modo que tenga exactamente cinco niveles de profundidad (recuerda que el arreglo más externo es el nivel 1). En algún lugar del tercer nivel, incluye la cadena deep, en el cuarto nivel, incluye la cadena deeper y en el quinto nivel, incluye la cadena deepest.

 */