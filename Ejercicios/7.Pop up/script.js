'use strict'


const nodoAbrirPopUp = document.querySelector ('#botonPopup');
const nodoPopUp = document.querySelector ('#pop-up');
nodoAbrirPopUp.addEventListener('click', ()=> {
    nodoPopUp.classList.remove('oculto');
})

const nodoCerrar = document.querySelector('#cerrar');
const nodoCruz = document.querySelector ('#cruz');
nodoCerrar.addEventListener ('click', ()=> {
    nodoPopUp.classList.add('oculto');
})

nodoCruz.addEventListener ('click', ()=> {
    nodoPopUp.classList.add('oculto');
})

//function AbrirPopUp (){
//    const nodoPopUp = document.querySelector ('#pop-up');
//    nodoPopUp.classList.remove('oculto');
//}
//
//function CerrarPopUp (){
//    const nodoPopUp = document.querySelector('#pop-up');
//    nodoPopUp.classList.add('oculto');
//}