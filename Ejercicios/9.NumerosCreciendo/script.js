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

    if(numero2 >= 149){
        clearInterval(ref_interval_3);
    }

}, 20);


/* function creaContador(limite,texto,nodoHTML){
    let contador = 0;
    
    const span_numero = document.createElement('span');
    span_numero.classList.add('numero');
    const span_titulo = document.createElement('span');
    span_titulo.innerHTML = texto;

    const ref_interval = setInterval ( ()=>{
        contador = contador + 1;
        span_numero = contador;
        if (contador >= limite){
            clearInterval(ref_interval);
        }
    }, 2);

    nodoHTML.appendChild(span_numero);
    nodoHTML.appendChild (span_titulo)
    
}
const contenedorPrueba = document.querySelector('.prueba');
const creador = creaContador(140,'Proyecto',contenedorPrueba);
console (creador); */

// ATRIBUTOS DATA DE HTML / JS