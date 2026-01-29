/**
 * 
 * Repaso
 * - Variables / Tipos de datos
 * - IF / FOR
 * - Seleccionar elementos del DOM: document.querySelector / All
 * - Añadir eventos
 * - Pintar en el DOM
 *   - innerHTM
 *   - createElement / append   
 * 
 * 
 * 
 * - SetTimeout/interval
 * - fetch
 * - Clases / modulos
 * 
 * - Promesas
 * 
 * 
 * Eventos
 * 
 * Otras APIS del navegador
 * 
 * 
 * 
 * 
 * 
 */




const nombre = '';


if( nombre ){ // nombre -> FALSO

}


if( nombre !== undefined && nombre !== null && nombre !== '' ){

}


for ( let i = 0; i<1000; i=i+2){

}




const nodoMain = document.getElementById('main')
const nodoClass = document.getElementsByClassName('verde')


const numeros = [1,2,3,4,5];


const numeros_por_5 = numeros.map( (cadaNumero)=>{ 
    return cadaNumero * 5
 } )

 [5,10,15]

const lista_personajes = [
    {nombre:'Pepe',apellido:'G'},
    {nombre:'Miguel',apellido:'G'},
    {nombre:'María',apellido:'G'},
    {nombre:'Pepa',apellido:'G'},
];


const lista_personajes_t = lista_personajes.map( (cadaPersonaje)=>{ 
    return cadaPersonaje.nombre
})


console.log(lista_personajes_t);

/*
 Eventos
    - Click
    - mousedown
    - mouseup
    - dblclick
    - mousemove
    - mouseenter
    - mouseleave
    - keypress
    - scroll
    - wheel

*/


// Estado de la letra pulsada
let letraPulsada = '';

const nodoBtn = document.querySelector('#btnClick');

nodoBtn.addEventListener( 'click', function( evento ){

    evento.stopPropagation()


    console.log('Clic en el botón')
    console.log( evento )
} )

const nodoBody = document.querySelector('body')

const lista_colores = [
   'red', 
   'blue', 
   'green', 
   'salmon', 
]

// nodoBody.addEventListener( 'mousemove', function(evento){
nodoBody.addEventListener( 'click', function(evento){
    console.log( 'Clic en body' )
    console.log(evento)

    const radioCirculo = 10 + Math.random() * 50 ; // [0,1)

    const color_rand = Math.trunc( Math.random() * 256 )
    console.log(color_rand)
    const rojo = Math.trunc( Math.random() * 256 ); // Un número aleatorio entre 0 y 255; -> ENTERO
    const verde = Math.trunc( Math.random() * 256 );
    const azul = Math.trunc( Math.random() * 256 );
    const color_hexadecimal = `rgb( ${rojo},${verde},${azul} )`

    

    pintaCirculos( evento.pageX, evento.pageY, radioCirculo, color_hexadecimal,letraPulsada )
} )


function pintaCirculos( posX, posY, radio, color, letra ){
    const nodoCirculo = document.createElement('div');
    nodoCirculo.classList.add('circulo');
    nodoCirculo.style.left = posX - radio + 'px';
    nodoCirculo.style.top = posY - radio + 'px';
    nodoCirculo.style.height = radio*2 + 'px';
    nodoCirculo.style.width = radio*2 + 'px';
    nodoCirculo.style.backgroundColor = color;
    nodoCirculo.innerText = letra ?? "";

    nodoBody.appendChild(nodoCirculo)

    const ref_timeOut = setTimeout( ()=>{
        nodoCirculo.remove();
    }, 10000 )

}


const nodoEntrada = document.querySelector('#entradaTexto');
console.log(nodoEntrada.offsetTop)

// nodoEntrada.addEventListener( 'keypress' , ( evento ) =>{
nodoEntrada.addEventListener( 'keydown' , ( evento ) =>{
    console.clear()
    console.log(evento);

    if( evento.key === '3'){
        evento.preventDefault();
        // Eliminar el comportamiento por defecto que tiene el evento
    }



}  );



nodoBody.addEventListener( 'keydown', function(evento){
    letraPulsada = evento.key
    console.log(evento)
} )


// localStorage.setItem( 'color', 'red' );



// localStorage.setItem( 'color', 'blue' );

const color_almacenado = localStorage.getItem( 'color' )

console.log(color_almacenado)
nodoBody.style.backgroundColor = color_almacenado ?? 'white';

const nodoColor = document.querySelector('#nodoColor');

nodoColor.addEventListener( 'change' , (evento)=>{
    console.log(evento)
    const color = nodoColor.value
    console.log(color)
    localStorage.setItem('color',color)
    nodoBody.style.backgroundColor = color;
} )

const preferencias = {
    color:'salmon',
    fuente:'san-serif',
    carrito:[
        {}
    ],
}

localStorage.setItem('preferencias', JSON.stringify(preferencias))

const str_preferencias = localStorage.getItem('preferencias')
console.log("str_preferencias")
console.log(str_preferencias)


const obj_preferencias_almacenadas = JSON.parse(str_preferencias)
console.log(obj_preferencias_almacenadas)
// JSON -> 




















