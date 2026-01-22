'use strict'

/**
 * FRONT
 * - 
 * 
 * 
 */


console.log('cargado')

const promesa_peticion = fetch( 'https://api.jsonblob.com/019be712-5f20-7ede-9408-b1fd0b645a81' );

console.log(promesa_peticion);

promesa_peticion.then( ( respuesta ) => {
    //Cuando todo va bien
    console.log(respuesta)
    if( respuesta.status === 200){
        console.log('OK')
    
        respuesta.json().then( (data)=> {
            console.log(data);
        })
    }


}).catch ((error) => {
    //error
    console.log("Error")
    console.log(error)
})

const promesa_peticion_v2 = fetch( 'https://api.jsonblob.com/019be712-5f20-7ede-9408-b1fd0b645a81' );

console.log(promesa_peticion);

promesa_peticion_v2.then ((respuesta) => {
    return respuesta.json();
}).then((datos) => {
    console.log("datos");
    console.log(datos);


} ).catch(error => {
    console.log(error)
})

//EJEMPLO REAL

const URL_API = 'https://rickandmortyapi.com/api/character';

fetch(URL_API).then(( peticion /**Variable donde se van a recibir los datos */ ) => {
    console.log("Peticion");
    console.log(peticion);
    return peticion.json();
} ).then( (datos) => {
    console.log("Datos peticion Rick y morty");
    console.log(datos);

    pintaLista (datos.results);

    
})

function pintaLista(lista){
    for (let cadaPersonaje of lista){
        pintaPersonaje(cadaPersonaje);
    }
}


function pintaPersonaje ( personaje ){
    const div = document.createElement('div');
    div.classList.add('card');

    const nodoH2 = document.createElement('h2');
    nodoH2.innerText = personaje.name;

    const nodoImg = document.createElement('img');
    nodoImg.src = personaje.image;

    div.appendChild(nodoH2);
    div.appendChild(nodoImg);

    const nodoGrid = document.querySelector('#grid');
    nodoGrid.appendChild(div);
}

