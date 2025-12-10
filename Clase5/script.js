'use strict'


// DIA de hoy

const hoy = new Date();
const dia = hoy.getDay();
console.log(hoy);
console.log(dia);

/**
 * VARIABLES DISCRETAS
 * 
 * En el método anterior, en el día que te devuelve un número correspondiente al dia de la semana empezando en 0 con el domingo. Son valores discretos. Una variable discreta es un tipo de variable que solo puede tomar un número finito o contable de valores, generalmente enteros, y no puede tener valores intermedios entre dos valores consecutivos
 */

let nombreDia= '';

if (dia === 0){
    nombreDia = 'Domingo';
}else if (dia === 1){
    nombreDia = 'Lunes';
}

// solo sirve para cuando tenemos variables discretas y estamos preguntando por IGUALDAs

switch (dia){
    case 0: 
        nombreDia = 'Domingo';
        break;
    case 1: 
        nombreDia = 'Lunes';
        break;
    case 2: 
        nombreDia = 'Martes';
        break; 
        // Palabra reservada que rompe la ejecución en cualquier punto en el que se encuentre.  
    case 3:
        nombreDia = 'Miercoles';
        break;
    case 4:
        nombreDia = 'Jueves';
        break;
    default:
        nombreDia = 'Error';
}


//jsDoc

/**
 * Determina si un número es par.
 *
 * @param {number} numero - Número a evaluar.
 * @returns {boolean} True si el número es par, false si es impar.
 */

function isPar (numero){
    if(numero % 2 === 0){
        return true;
    }else{
        return false;
    }
}

// ARROW FUNCTION

const otroSaludo = (nombre, apellido) => {
    console.log ('Saludo otra vez a' + nombre + apellidos)
}

// FOR -> LISTAS

for( let i = 0; i<10 ; i++ ){
    console.log('Hola: ', i);
}

let listaCompra = ['Tomates','Plátanos', `Yogures`, 'Papel', 'Salmón'];


// Quiero saber el primer elemento de la lista

console.log(listaCompra[0])

// Tamaño -< .lenght

const sizeListaCompra = listaCompra.length;

// Cambio de valores en indice, ya que cada elemento en una lista es en verdad una variable por si misma

listaCompra[1] = 'Mandarinas';


//Métodos de las listas

listaCompra.push('Fresas') // Añade en la última posición un elemento nuevo,como el append de Python. 

listaCompra.includes('Papel') // Averigua si este elemento está en el array. 

//Mezcla del FOR para recorrer una lista

for (let x = 0, x < listaCompra.length, x++){
    console.log(listaCompra [x])
}

for (let x = 0, x < listaCompra.length, x++){
    nodoMilistaCompra.innerHTML =  '<li>' +  listaCompra[x] + '</li>'
}