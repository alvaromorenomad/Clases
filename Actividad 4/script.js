'use strict'

function crearContenedor(nodoSalida){
    let contador = 0;

    return function () {
        contador++;
        nodoSalida.innerText = contador;
    }
}

const nodoBtnMasIfhone = document.querySelector('#btnMasIfhone');
const nodoCantidad = document.querySelector('#numeroCantidad');

const nodoBtnMasCargador = document.querySelector('#btnMasCargador');
const nodoNumeroCantidad2 = document.getElementById('numeroCantidad2');



const sumarIphone = crearContenedor(nodoCantidad);
const sumarCargador = crearContenedor(nodoNumeroCantidad2);

nodoBtnMasCargador.addEventListener ('click', sumarCargador)
nodoBtnMasIfhone.addEventListener('click', sumarIphone);

