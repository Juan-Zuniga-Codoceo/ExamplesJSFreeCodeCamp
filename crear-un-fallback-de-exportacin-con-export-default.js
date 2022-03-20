export default function subtract(x, y) {
  return x - y;
}


/* Explicación: 
Crear un fallback de exportación con export default
En la lección export, aprendiste sobre la sintaxis conocida como named export. Esto te permitió hacer disponibles múltiples funciones y variables para usar en otros archivos.

Aquí hay otra sintaxis export que necesitas saber, conocida como export default. Usualmente utilizarás esta sintaxis, si es sólo un valor el que está siendo exportado desde un archivo. También es utilizado para crear valores fallback para un archivo o módulo.

A continuación hay ejemplos usando export default:

export default function add(x, y) {
  return x + y;
}

export default function(x, y) {
  return x + y;
}
La primera es una función nombrada, y la segunda es una función anónima.

Ya que export default es usado para declarar un valor fallback para un módulo o archivo, sólo puedes tener un valor que sea exportación por defecto en cada módulo o archivo. Además, no puedes usar export default con var, let, o const

Ejercicio:
La siguiente función debe ser el valor fallback para el módulo. Por favor, añade el código necesario para hacerlo.

*/