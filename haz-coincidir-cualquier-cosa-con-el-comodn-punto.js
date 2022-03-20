let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Cambia esta línea
let result = unRegex.test(exampleStr);


/*Explicación:
Haz coincidir cualquier cosa con el comodín punto
A veces no conoces (o no necesitas conocer) los caracteres exactos en tus patrones. Pensar en todas las palabras que coincidan, digamos, con una ortografía errónea llevaría mucho tiempo. Afortunadamente, puedes ahorrar tiempo utilizando el carácter de comodín: .

El carácter de comodín . coincidirá con cualquier carácter único. El comodín también es llamado dot y period. Puedes utilizar el carácter de comodín como cualquier otro carácter en la expresión regular. Por ejemplo, si quieres hacer coincidir hug, huh, hut, y hum, puedes usar la la expresión regular /hu./ para que coincida con las cuatro palabras.

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);
Ambas llamadas a test devolverán true.

Ejercicio:

Completa la expresión regular unRegex para que coincida con las cadenas run, sun, fun, pun, nun, y bun. Tu expresión regular debe usar el carácter de comodín.

 */