let reCriminals = /C+/; // Cambia esta línea



/* Explicación: 
Encuentra uno o más criminales en una cacería
Es hora de hacer una pausa y probar tus nuevas habilidades para escribir expresiones regulares. Un grupo de criminales se han escapado de la cárcel, pero no sabes cuántos. Sin embargo, sabes que permanecen unidos cuando están alrededor de otras personas. Eres responsable de encontrar a todos los criminales a la vez.

Este es un ejemplo para revisar cómo hacer esto:

La expresión regular /z+/ coincide con la letra z cuando aparece una o más veces seguidas. Encontrará coincidencias en las siguientes cadenas:

"z"
"zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzabc"
Pero no encuentra coincidencias en las siguientes cadenas, ya que no hay letras z:

""
"ABC"
"abcabc"

Ejercicio:
Escribe una expresión regular codiciosa que encuentre uno o más criminales dentro de un grupo de personas. Un criminal está representado por la letra mayúscula C.

*/