'use strict'

/**const primer_numero = Number(prompt('Introduce un número'));
const segundo_numero = Number(prompt ('Introduce otro número'));
console.log(typeof(primer_numero), typeof(segundo_numero))
const nodoContenedor = document.querySelector ('#contenedor');*/

  function calcular_mayor(){  
    const primer_numero = document.querySelector("#primer_numero");
    const segundo_numero = document.querySelector("#segundo_numero"); 
    const nodoContenedor = document.querySelector ("#contenedor")
    
    if (primer_numero.value > segundo_numero.value){
        nodoContenedor.innerHTML = `<h1>El número 1: (${primer_numero.value}) es mayor que el     número 2: (${segundo_numero.value})</h1>`;
    }else if(primer_numero.value < segundo_numero.value){
        nodoContenedor.innerHTML = `<h1>El número 1: (${primer_numero.value}) es menor que el     número 2: (${segundo_numero.value})</h1>`;
    }else if(primer_numero.value === segundo_numero.value){
        nodoContenedor.innerHTML = `<h1>El número 1: (${primer_numero.value}) es igual que el     número 2: (${segundo_numero.value})</h1>`;
    }else{nodoContenedor.innerHTML = '<h1>Alguno de los datos introducidos no son válidos.  Asegúrate de que el valor introducido es un número y que no has añadido espacios</h1>'};
    }

/**
 * Para añadir las mejoras, habría que añadir dos input al html con un botón y manejar en js el con .value en un función que se ejecute cuando se pulse el botón
 * 
 * 
 * 
 */