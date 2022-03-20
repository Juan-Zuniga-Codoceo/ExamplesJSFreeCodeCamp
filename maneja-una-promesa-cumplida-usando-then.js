const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer es establecido a true para representar una respuesta satisfactoria del servidor
  let responseFromServer = true;

  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
makeServerRequest.then(result =>{
  console.log(result);
})

/* Explicación: 
Maneja una promesa cumplida usando then
Las promesas son muy útiles, cuando tu tienes un proceso que toma una cantidad de tiempo desconocida en tu código (algo asíncrono por ejemplo), a menudo una petición de servidor. Cuando tu haces una petición a un servidor, toma algo de tiempo, después de que termina, normalmente quieres hacer algo con la respuesta del servidor. Esto se puede lograr utilizando el método then. El método then, se ejecuta inmediatamente después de que tu promesa se cumple con resolve. A continuación un ejemplo:

myPromise.then(result => {

});
result viene con el argumento proporcionado al método resolve.

Ejercicio:

Añade el método then a tu promesa. Usa result como parámetro de tu función callback, asimismo imprime result en la consola.

*/