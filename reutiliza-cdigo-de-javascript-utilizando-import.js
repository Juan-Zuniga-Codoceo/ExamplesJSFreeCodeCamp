import {uppercaseString, lowercaseString} from './string_functions.js';
// Cambia solo el código encima de esta línea

uppercaseString("hello");
lowercaseString("WORLD!");

/*Explicación: 
Reutiliza código de JavaScript utilizando import
import te permite elegir qué partes de un archivo o módulo cargar. En la lección previa, los ejemplos exportaron add del archivo math_functions.js. Así es como puedes importarlo para utilizarlo en otro archivo:

import { add } from './math_functions.js';
Aquí, import encontrará add en math_functions.js, importa sólo esa función para que la uses, e ignora el resto. El ./, dice a import que busque el archivo math_functions.js en la misma carpeta que el archivo actual. La ruta relativa del archivo (./) y la extensión del archivo (.js), son requeridos cuando se utiliza import de esta manera.

Puedes importar más de un elemento del archivo, añadiéndolos en la declaración import de esta manera:

import { add, subtract } from './math_functions.js';

Ejercicio:

Agrega la declaración import apropiada que permita al archivo actual, usar las funciones uppercaseString y lowercaseString que exportaste de la lección previa. Estas funciones se encuentran en un archivo llamado string_functions.js, el cual está en el mismo directorio que el archivo actual.

*/