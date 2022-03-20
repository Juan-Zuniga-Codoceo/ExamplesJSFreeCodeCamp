let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Cambia esta línea
let result = userCheck.test(username);

/*Explicación:
Restringe posibles nombres de usuario
Los nombres de usuario se utilizan en todas partes en Internet. Son los que dan a los usuarios una identidad única en tus sitios favoritos.

Se necesita comprobar todos los nombres de usuario en una base de datos. Estas son algunas reglas simples que los usuarios deben seguir al crear su nombre de usuario.

Los nombres de usuario sólo pueden utilizar caracteres alfanuméricos.

Los únicos números del nombre de usuario tienen que estar al final. Puede tener un cero o más al final. El nombre de usuario no puede iniciar con un número.

Las letras del nombre de usuario pueden ser minúsculas y mayúsculas.

Los nombres de usuario deben tener al menos dos caracteres. Un nombre de usuario de dos caracteres sólo puede utilizar letras del alfabeto como caracteres.

Ejercicio:

Cambia la expresión regular userCheck para que se ajuste a las restricciones indicadas anteriormente. */