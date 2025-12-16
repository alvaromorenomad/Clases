'use strict'


/**
 * PRIMER PROGRAMA
 * 
 * CALCULAR TODOS LOS NÚMEROS IMPARES ENTRE 0 Y 100
 * 
 * Esto se hace haciendo que todos los números en los que el resto sea distinto a cero son impares. 
 * 
 * para calcular todo, se tiene que hacer un bucle FOR
 * 
 * SUMARLOS
 * 
 * Tiene que devolver (return) el acumulativo. 
 * 
 * crear una variable acumulativa para que se vayan almacenando los números
 */

//let acumulativo = 0;
//
//for (let i = 1; i <= 100; i++){
//    if (i % 2 !== 0){
//        acumulativo += i;
//    }
//}
//

/**
 * SEGUNDO PROGRAMA
 * 
 * AÑADIR UN BOTÓN QUE EJECUTE EL PROGRAMA
 * 
 * Utilizar evento ONCLICK
 * 
 * QUE SE PINTE EN LA WEB
 * 
 * seleccionar Nodo
 * inner html
 * 
 * 
 */



function ejecutarBoton (){

    const nodoResultado = document.querySelector('#resultado'); 

    let acumulativo = 0;
    

    const nodoBotonMinimo = document.querySelector ('#minimo');
    const nodoBotonMaximo = document.querySelector ('#maximo');

    let minimo = Number(nodoBotonMinimo.value);
    let maximo = Number(nodoBotonMaximo.value);

    for (let i = minimo; i <= maximo; i++){
        if (i % 2 !== 0){
            acumulativo += i;
        }
    }

    nodoResultado.innerHTML = `
        <div class="ventanaResultado">

                ${ acumulativo}

        </div>
    
    `
    
}

/**
 * TERCER PROGRAMA
 * 
 * Añadir dos input, uno para mínimo y otro para máximo. AÑADIR DOS INPUTS
 * 
 * crear dos input en html, selectquery coger valor, relacionarlo con un boton type sumit
 * 
 * 
 * ADAPTAR EL PROGRAMA
 * 
 * cambiar el tramo de enmedio del for con los .value y eso
 * 
 * 
 */


