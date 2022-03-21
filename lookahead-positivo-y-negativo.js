let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/; // Cambia esta línea
let result = pwRegex.test(sampleWord);


/* Lookahead positivo y negativo
Los lookaheads son patrones que le indican a JavaScript que busque por anticipado en tu cadena para verificar patrones más adelante. Esto puede ser útil cuando deseas buscar varios patrones sobre la misma cadena.

Hay dos tipos de lookaheads: lookahead positivo y lookahead negativo.

Un lookahead positivo buscará para asegurarse de que el elemento en el patrón de búsqueda este allí, pero en realidad no lo coincidirá. Un lookahead positivo se usa como (?=...) donde el ... es la parte requerida que no coincide.

Por otro lado, un lookahead negativo buscará para asegurarse de que el elemento en el patrón de búsqueda no este allí. Un lookahead negativo se usa como (?!...) donde el ... es el patrón que no quieres que esté allí. El resto del patrón se devuelve si la parte de lookahead negativo no está presente.

Los lookaheads son un poco confusos, pero algunos ejemplos ayudarán.

let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex);
noquit.match(qRegex);
Ambas llamadas a match devolverán ["q"].

Un uso más práctico de lookaheads es comprobar dos o más patrones en una cadena. Aquí hay un verificador de contraseñas (ingenuamente) simple que busca entre 3 y 6 caracteres y al menos un número:

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);
Utiliza los lookaheads en el pwRegex para que coincida con las contraseñas que tengan más de 5 caracteres y dos dígitos consecutivos.

*/