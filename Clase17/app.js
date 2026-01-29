'use strict'

const URL = 'https://api.npoint.io/2ba130d5ba2c58c7b93f'

//Peticion de API estándar

const respuesta = fetch(URL);
respuesta.then((promesa) => {
    return promesa.json()
}).then( (datos) => {
    console.log(datos)
})


//Peticion de API await/async

//Await -> Espera a la resolución de la promesa.
let respuesta_v2 = await fetch(URL);
// Esperar
console.log ("respuesta_v2");
console.log(respuesta_v2);

let datos = await respuesta_v2.json();
console.log(datos);

//async/await completo ejemplo

async function getPersonaje(page) {
    let peticion = await fetch(URL_API + '?page=' + page);
    let datos = await peticion.json();
    return datos;
}

const allPersonajes = await getPersonaje(4);

