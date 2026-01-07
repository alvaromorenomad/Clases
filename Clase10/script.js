'use strict'

// crear tablas de multipliclar por JS
// pintar en HTMLO


//CUANDO - Cuando se cargue -> ejecución directa
//DONDE - dentro de #gridTablas
let nodoGridTablas = document.querySelector('#gridTablas');



function get_tabla (numero_tabla){
    let tablaHTML = ``
    tablaHTML += `
        <div class="tabla">
            <h2>Tabla del ${numero_tabla}</h2>
            `

    for (let i = 0; i < 11; i++){
        tablaHTML += `<div> ${numero_tabla} x ${i} = ${ i * numero_tabla} </div>`
    }

    tablaHTML += `</div>
        </div>`

    return tablaHTML;

}

let todas_tablas = ``

for ( let cadaTabla = 0; cadaTabla < 8; cadaTabla++){
    todas_tablas += get_tabla (cadaTabla);
}

nodoGridTablas.innerHTML = todas_tablas; 


//si este último bucle for lo metemos en un addeventlistener como función utilizando el valueAsNumber como dato límite en el cadaTabla <= limite tenemos la finalización del ejercicio. 
