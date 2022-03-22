function factorialize(num) {
  let product =1;
  for (let i=2;i<=num;i++){
    product *=i
  }
  return product;
}

factorialize(5);



/* Factoriza un número
Devuelve el factorial del entero proporcionado.

Si el número entero es representado con la letra n, un factorial es el producto de todos los enteros positivos menores o iguales a n.

Los factoriales suelen representarse con la abreviatura n!

Por ejemplo: 5! = 1 * 2 * 3 * 4 * 5 = 120

Sólo se proporcionarán a la función los enteros mayores o iguales a cero.*/