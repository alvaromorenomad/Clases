'use strict'

const primer_numero = Number(prompt('Introduce un número'));
const segundo_numero = Number(prompt ('Introduce otro número'));
console.log(typeof(primer_numero), typeof(segundo_numero))
const nodoContenedor = document.querySelector ('#contenedor');

if (primer_numero > segundo_numero){
    nodoContenedor.innerHTML = `El número 1: (${primer_numero}) es mayor que el número 2: (${segundo_numero})`;
}else if(primer_numero < segundo_numero){
    nodoContenedor.innerHTML = `El número 1: (${primer_numero}) es menor que el número 2: (${segundo_numero})`;
}else if(primer_numero === segundo_numero){
    nodoContenedor.innerHTML = `El número 1: (${primer_numero}) es igual que el número 2: (${segundo_numero})`;
}else{nodoContenedor.innerHTML = 'Alguno de los datos introducidos no son válidos. Asegúrate de que el valor introducido es un número y que no has añadido espacios'};

/**
 * Para añadir las mejoras, habría que añadir dos input al html con un botón y manejar en js el con .value en un función que se ejecute cuando se pulse el botón
 * 
 * 
 * 
 */