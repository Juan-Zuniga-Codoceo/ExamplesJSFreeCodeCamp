let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!"
let chewieRegex = /Aa*/; 


let result = chewieQuote.match(chewieRegex);







/*Haz coincidir caracteres que aparecen cero o más veces
El último desafío utilizó el signo más + para buscar caracteres que aparecen una o más veces. También hay una opción para hacer coincidir caracteres que aparecen cero o más veces.

El carácter que hace esto es el asterisco o la estrella: *.

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
/*soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);
En orden, los tres match devolverán los valores ["goooooooo"], ["g"], y null.

Para este desafío, chewieQuote ha sido inicializada entre bastidores con la cadena Aaaaaaaaaaaaaaaarrrgh!. Crea una expresión regular chewieRegex que utilice el carácter * para encontrar el carácter A mayúscula seguido inmediatamente por cero o más caracteres a minúscula en chewieQuote. Tu expresión regular no necesita banderas o clases de caracteres, y no debe coincidir con ninguna de las otras comillas.

 */