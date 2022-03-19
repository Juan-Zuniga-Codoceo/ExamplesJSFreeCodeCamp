function randomRange(myMin, myMax) {
  // Cambia solo el código debajo de esta línea
  return Math.floor(Math.random()*(myMax-myMin+1))+myMin;
  // Cambia solo el código encima de esta línea
}
/* Explicación:
Genera números enteros aleatorios dentro de un rango
En lugar de generar un número entero aleatorio entre cero y un número dado como lo hicimos anteriormente, podemos generar un número entero aleatorio que se encuentre dentro de un rango de dos números específicos.

Para ello, definiremos un número mínimo min y un número máximo max.

Esta es la fórmula que utilizaremos. Tómate un momento para leerla e intenta entender lo que este código está haciendo:

Math.floor(Math.random() * (max - min + 1)) + min

Ejercicio:
Crea una función llamada randomRange que tenga un rango myMin y myMax y devuelva un número entero aleatorio mayor o igual a myMin, y es menor o igual a myMax, inclusivo.*/

