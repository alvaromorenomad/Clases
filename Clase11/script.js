'use strict'

//numero creciendo
let miNumero = 0;
let nodoNumero = document.querySelector('#numero');
const ref_interval = setInterval ( function(){
 
    miNumero++;
    nodoNumero.innerHTML = miNumero;

} , 1000)

//boton parar contador

let nodoBotonStop = document.querySelector('#btnStop');
nodoBotonStop.addEventListener('click', function(){
    clearInterval(ref_interval)
})

/**
 * Cuando clico en btnalumno
 * 
 * acceder al input
 * 
 * 
 * Pintar un elemento alumno dentro de #gridAlumno
 * 
 */

const nodoBtnAlumno = document.querySelector('#btnAlumno');

nodoBtnAlumno.addEventListener('click', function(){
    let nodoInput = document.querySelector('#entradaNombre');
    const nombre = nodoInput.value;
    pintarAlumnoAppend(nombre);
})

function pintarAlumno ( nombreAlumno ){
    const html_alumno = `<div class="alumno">
                            <h2>${nombreAlumno}</h2>
                            <button> Seleccionar </button>
                        </div>`
    
    const nodoGridAlumnos = document.querySelector('#gridAlumnos');
    nodoGridAlumnos.innerHTML += html_alumno;                
}

//con el método innerHTML, se reescribe todo el rato el elemento. Para hacerlo de otras maneras: 

function pintarAlumnoAppend(nombreAlumno){
    //crear elementos nuevos

    const nodoAlumno = document.createElement('div');
    
    nodoAlumno.classList.add('alumno');

    const nodoH2 = document.createElement('h2'); 
    nodoH2.innerHTML = nombreAlumno

    const nodoBoton = document.createElement('button');
    nodoBoton.innerHTML = 'Seleccionar';

    nodoBoton.addEventListener('click',function(){
        nodoBoton.classList.add('verde')
    })

    nodoAlumno.appendChild(nodoH2);
    nodoAlumno.appendChild(nodoBoton);

    //pintado

    const nodoGridAlumnos = document.querySelector('#gridAlumnos');
    nodoGridAlumnos.appendChild(nodoAlumno);
}

