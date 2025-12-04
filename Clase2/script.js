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

 //SELECCIONAR contendor_main
 //identificador = VARIABLE con ese nombre
 
 console.log(contenedor_main);

 //PINTO en la web. Innerhtml sobre escribe el contenido html base

 contendor_main.innerHTML = contendor_main.innerHTML + '<h1>Nuevo código añadido por JS<h1>'

 let nodoContenedorMain = document.querySelector('.verde')

 //quiero hacer click en el botón

 //quiero pintar 

 function pintarEnEmojis(){
    console.log('evento creado')
    
    const nodoEmojis = document.querySelector('#emojis');
    
    console.log(nodoEmojis);
    
    nodoEmojis.innerHTML += '1'; 

 }