'use strict'

//const nodoInput = document.querySelector('#generador_tablas');
//const numero_tabla = nodoInput.value;

//function tabla_multiplicar(tabla){
//
//    for (let mul = 0; mul <=10; mul++) {
//        let resultado = tabla * mul;
//        console.log(`${tabla} x ${mul} = ${resultado}`);
//    }
//}
//



function tabla_multiplicar(numero_tabla) {

    const nodoInput = document.querySelector('#generador_tablas');
    const numero_tabla = nodoInput.value;
    const nodoTablas = document.querySelector('#printablas');
    
    let html = `<div id="tabla${numero_tabla}">`;

    for (let mul = 0; mul <= 10; mul++) {
        let resultado = numero_tabla * mul;
        html += `<li>${numero_tabla} x ${mul} = ${resultado}</li>`;
    }

    html += `</div>`;

    nodoTablas.innerHTML += html; // o = html si quieres reemplazar
}