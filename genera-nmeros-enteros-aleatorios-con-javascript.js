function randomWholeNum() {

  // Cambia solo el código debajo de esta línea

  return Math.floor(Math.random()*10);
}
/* Explicación:
Genera números enteros aleatorios con JavaScript
Es genial que podamos generar números decimales aleatorios, pero es incluso más útil si lo usamos para generar números enteros aleatorios.

Usa Math.random() para generar un decimal aleatorio.
Multiplica ese decimal aleatorio por 20.
Utiliza otra función, Math.floor() para redondear el número hacia abajo a su número entero más cercano.
Recuerda que Math.random() nunca devolverá un 1 y porque estamos redondeando hacia abajo, es imposible obtener 20. Esta técnica nos dará un número entero entre 0 y 19.

Poniendo todo junto, así es como se ve nuestro código:

Math.floor(Math.random() * 20);
Estamos llamando a Math.random(), multiplicando el resultado por 20 y pasando el valor a la función Math.floor() para redondear el valor hacia abajo al número entero más cercano.

Ejercicio:
Utiliza esta técnica para generar y devolver un número entero aleatorio entre 0 y 9.*/

