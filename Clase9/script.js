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
persona2.saludo();

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