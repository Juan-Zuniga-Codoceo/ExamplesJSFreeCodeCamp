function reverseString(str) {
  let reversedString = "";
  for (let i = str.length-1;i>=0;i--){
    reversedString += str[i]
  }
  return reversedString;
}

reverseString("hello");

/* Invierte una cadena
Invierte la cadena proporcionada.

Es posible que necesites convertir la cadena en un arreglo antes de poder invertirla.

Tu resultado debe ser una cadena.*/