'use strict'

console.log ('Cargado clase 3');

let noDefinida; //UNDEFINED

let nombre = 'Alvaro';

let edad = 40;

let permitido = false;

let sorteo = ['Ramon','jose','paula','leire'];

let persona = {
    nombre: 'Alvaro',
    edad: 40
}

//OPERADORES 

//COMPARACION (SIEMPRE DEVUELVEN BOOLEAN)

if( nombre === 'Fran'){

};

let mayor = 6 > 5;
let menor = 6 < 5;
let distinto = 6 !== 5;
let mayor_igual = 6 >= 5;
let igual = 5 === 5;

//ASIGNACION

// MATEMATICOS

let multiplicacion = 6 * 5;
let division = 10 / 3;
let resto = 15 % 2;

//LOGICOS
/**
 * AND = &&
 * OR = ||
 * Negación = !
 * 
 */

//let edad_intrucida = Number(prompt('Introduce la edad'));
//PROMPT SIEMPRE devuelve un string

let edad_intrucida = 10;


let estudia = true;
let trabaja = false;
console.log(edad_intrucida);

if(edad_intrucida >= 18 && (estudia === True || trabaja === True)){
    console.log('Eres una persona de provecho')
}else{
    if (edad_intrucida < 18){
        console.log('No pasa nada ¡Espabila!')
    }else{
        console.log('Vago')
    }
};

/**
 * Añadir y quitar clases de un elemento HTML
 * 
 * 
 * 
 */

function add_clase_rotando (){
    console.log('Click en botón')

    const nodoCuadrado = document.querySelector('#miCuadrado')
    console.log (nodoCuadrado)

    // Añadir una clase a cualquier NOFO HTML INDIVIDUAL

    nodoCuadrado.classList.toggle('rotando')

    //nodoCuadrado.classList.remove('rotando')
    //nodoCuadrado.classList.toggle('rotando') Esto es para que quite y ponga segun no esté.

    const nodoInputNombre = document.querySelector('#inputNombre')

    console.log(nodoInputNombre.value)

    nodoCuadrado.innerHTML = nodoInputNombre.value;
}

