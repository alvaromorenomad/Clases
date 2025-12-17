'use strict'

function pintar_azul(){
   const listaNodoCuadrados = document.querySelectorAll('.cuadrado');
    
   for(const cadaNodo of listaNodoCuadrados){
    cadaNodo.classList.add ('azul');

    }
}

let anchoCuadrados = 100

function cambioAncho(){
    const listaNodosCuadrados = document.querySelectorAll('.cuadrado');

    if (anchoCuadrados < 200){
        anchoCuadrados = anchoCuadrados + 10;
    }else{
        anchoCuadrados = anchoCuadrados - 100;
    }

    for(const cadaNodo of listaNodosCuadrados){
        cadaNodo.style.width = anchoCuadrados + 'px';
    }
    
}

/**
 * Cuando definimos un tipo de dato, vamos a tener herramientas (métodos):
 * 
 * - NUMBER: 
 *  - fixed (redondear)
 * 
 * - LISTAS: 
 *  - Push (añadir un elemento al final de la lista/array/)
 *  - Pop (Elimina el último elemento)
 *  - includes (Te dice si hay un elemento en la lista): frutas.includes('Manzana')
 *  - unshift (para añadir un elemento al principio)
 *  - shift (para eliminar el primer elemento)
 *  - reverse (dar la vuelta al array)
 * 
 * NOTA: Hay elementos que mutan el objeto original. 
 * 
 * 
 */

//let pelicula = 'Jurasik Park';
//let director = 'Steven Spielberg'
//
//let pelicula2 = 'Avatar';
//let director2 = 'James Cameron';


let pelicula = {
    titulo:'Jurassic Park',
    saludo: function(){
        //Esto es un Método. 
    },
    director: {
        nombre:'Steven',
        apellido: 'Spielberg'
    },
    reparto: [
        'Juan',
        'Oscar'
    ]
}

console.log(pelicula.titulo)