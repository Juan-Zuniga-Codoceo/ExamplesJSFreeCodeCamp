let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Cambia esta línea
let result = petRegex.test(petString);


/* Explicación: 
Coincide una cadena literal con diferentes posibilidades
Al utilizar expresiones regulares como /coding/, puedes buscar el patrón coding en otra cadena.

Esto es muy potente al buscar cadenas individuales, pero está limitado a un solo patrón. Puedes buscar múltiples patrones usando el operador alternation o OR: |.

Este operador coincide con los patrones antes o después de él. Por ejemplo, si deseas coincidir con las cadenas yes o no, la expresión regular que quieres es /yes|no/.

También puedes buscar más de dos patrones. Puedes hacer esto añadiendo más patrones con más operadores OR separándolos, como /yes|no|maybe/.

Ejercicio:
Completa la expresión regular petRegex para que coincida con las mascotas dog, cat, bird, o fish.*/