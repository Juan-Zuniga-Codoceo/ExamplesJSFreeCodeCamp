const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Cambia solo el código debajo de esta línea
arr.splice(1,4);
// Cambia solo el código encima de esta línea
console.log(arr);


/* Explicación:
Elimina elementos usando splice()
Bien, ya hemos aprendido a eliminar elementos al principio y al final de los arreglos utilizando shift() y pop(), pero ¿qué pasa si queremos eliminar un elemento de alguna parte del medio? ¿O eliminar más de un elemento a la vez? Pues bien, ahí es donde entra splice(). splice() nos permite hacer precisamente eso: eliminar cualquier número de elementos consecutivos de cualquier parte de un arreglo.

splice() puede tomar hasta 3 parámetros, pero por ahora, nos centraremos sólo en los 2 primeros. Los dos primeros parámetros de splice() son enteros que representan índices, o posiciones, del arreglo que llama splice(). Y recuerda que los arreglos están indexados en cero, por lo que para indicar el primer elemento de un arreglo, usaríamos 0. El primer parámetro de splice() representa el índice del arreglo a partir del cual se empiezan a eliminar los elementos, mientras que el segundo parámetro indica el número de elementos a eliminar. Por ejemplo:

let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);
Aquí eliminamos 2 elementos, comenzando con el tercer elemento (en el índice 2). array tendrá el valor ['today', 'was', 'great'].

splice() no sólo modifica el arreglo que llama, sino que también devuelve un nuevo arreglo que contiene el valor de los elementos eliminados:

let array = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array.splice(3, 2);
newArray tiene el valor ['really', 'happy'].

Ejercicio:

Hemos inicializado un arreglo arr. Usa splice() para eliminar elementos de arr, de forma que sólo contenga elementos que sumen el valor de 10.

*/