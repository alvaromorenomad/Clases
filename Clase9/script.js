'use strict'


const persona = {
    //Aqui las variables se llaman ATRIBUTOS/PROPIEDADES
    nombre:'Luis',
    apellido:'Jiménez',
    nacimiento: 1990,
    hermanos: [
        'Manuel',
        'Lourdes',
    ],
    saludo: function(){
        console.log(`Hola  ${this.nombre}`);
    }
}

const persona2 = {
    nombre:'Julia',
    apellido:'Gómez',
    nacimiento: 1991
}

console.log(persona.nombre);


const unaCopiaPersona = persona;

// Estamos buscando en document -> en el nodo principal que es la web
const nodoPrincipal = document.querySelector('#principal')

console.log(nodoPrincipal);
console.log(nodoPrincipal.id);
nodoPrincipal.style.color = 'red';


// si sustituyo document por cualquier nodo html para hacer la búsqueda también se puede hacer. También se pueden combinar 
const listaNodosCuadrados = nodoPrincipal.querySelectorAll('.cuadrado');
console.log(listaNodosCuadrados)

for (const cadaCuadrado of listaNodosCuadrados){
    cadaCuadrado.classList.add('verde');
}

//Cuando clique en cada cuadrado, quiero que cambie de color. 

const nodoMiBoton = document.querySelector('#miBoton');

//el primer parámetro del evento tiene que ser el nombre del evento, el segundo nombre del evento es una función que se tiene que ejecutar en ese punto (la función se puede poner de cualquieras de la manera que conocemos: normal creándola fuera, anónimas, arrow, etc). No hace falta que tenga réplica en el html. 

//nodoMiBoton.addEventListener('click', function(){
//
//   alert('Se ha clicado');
//
//}
//);

const lista_nodos_cuadrados = document.querySelectorAll ('.cuadrado');

for (const cadaCuadrado of lista_nodos_cuadrados){
    cadaCuadrado.addEventListener( 'click', function(){
        console.log ("click")
        cadaCuadrado.classList.toggle( 'rojo' ) //en vez de cadaCuadrado, al estar en su ámbito, se puede utilizar this. 
    })
}