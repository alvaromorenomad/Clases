'use strict'

console.log ('Archivo cargado');

//BUCLE FOR
 /**
  * Un trozo de código que se repite un número DETERMINADO de vecez
  */

 //for (inicialización, condición de salida, actualización)
 for (let i = 3; i < 10; i++){
    console.log("Hola: ", i)
 }

 //el operador ++ es variable = variable + 1

 
 let asteriscos = ' ';

 for (let c = 0; c < 1000; c++){
    asteriscos = asteriscos + '* ';    
 }

 console.log(asteriscos);

 //let aceptacion = confirm(¿Quieres salir de la página?)//

 let entradaDeDatos = prompt('Introduce tu nombre');

 console.log(entradaDeDatos);