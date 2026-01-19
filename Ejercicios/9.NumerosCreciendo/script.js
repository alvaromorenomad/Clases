'use strict'

const nodoNumeroCreciendo = document.querySelector('#numeroCreciendo');
const nodoNumeroCreciendo2 = document.querySelector('#numeroCreciendo2');
const nodoNumeroCreciendo3 = document.querySelector('#numeroCreciendo3');

const ref_interval_1 = setInterval (function(){
    let numero = 0;
    for (numero = 0; numero <= 40; numero++){
       nodoNumeroCreciendo.innerHTML = `${numero}K+`;
       //console.log(numero);  
    };

   
    
    console.log(numero);
}, 1000);

