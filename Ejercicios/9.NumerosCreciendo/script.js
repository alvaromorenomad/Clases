'use strict'

const nodoNumeroCreciendo = document.querySelector('#numeroCreciendo');
const nodoNumeroCreciendo2 = document.querySelector('#numeroCreciendo2');
const nodoNumeroCreciendo3 = document.querySelector('#numeroCreciendo3');

let numero = 0;
let numero1 = 0;
let numero2 = 0;

const ref_interval_1 = setInterval (()=>{
    numero++;
    nodoNumeroCreciendo.innerHTML = `${numero}K+`;

    if (numero >= 40){
        clearInterval(ref_interval_1)
    } 
    
}, 73); 

const ref_interval_2 = setInterval(()=>{
    numero1++;        
    nodoNumeroCreciendo2.innerHTML = `${numero1}K+`;

    if(numero1 >= 70){
        clearInterval(ref_interval_2);
    }

}, 43);

const ref_interval_3 = setInterval(()=>{
    numero2++;        
    nodoNumeroCreciendo3.innerHTML = `${numero2}K+`

    if(numero2 >= 107){
        clearInterval(ref_interval_3);
    }

}, 28);



