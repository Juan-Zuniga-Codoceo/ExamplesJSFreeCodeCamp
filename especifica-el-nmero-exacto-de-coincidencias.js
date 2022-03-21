let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Cambia esta línea
let result = timRegex.test(timStr);


/*Explicación:
Especifica el número exacto de coincidencias
Puedes especificar el número inferior y superior de patrones mediante especificadores de cantidad utilizando llaves. A veces solo quieres un número específico de coincidencias.

Para especificar un cierto número de patrones, simplemente pon ese número entre corchetes.

Por ejemplo, para que coincida con la palabra hah solo con la letra a 3 veces, tu expresión regular sera /ha{3}h/.

let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(A4);
multipleHA.test(A3);
multipleHA.test(A100);
En orden, las tres llamadas a test devuelven false, true y false.

Ejercicio:
Modifica la expresión regular timRegex para hacer coincidir con la palabra Timber solo cuando esta tiene cuatro letras m.

 */