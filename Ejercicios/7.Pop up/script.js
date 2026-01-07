'use strict'


//const nodoAbrirPopUp = document.querySelector ('#botonPopup');
//
//nodoAbrirPopUp.addEventListener('click', ()=> {
//    
//    const nodoPopUp = document.querySelector ('#pop-up');
//
//    nodoPopUp.classList.remove('oculto');
//})

function AbrirPopUp (){
    const nodoPopUp = document.querySelector ('#pop-up');
    nodoPopUp.classList.remove('oculto');
}

function CerrarPopUp (){
    const nodoPopUp = document.querySelector('#pop-up');
    nodoPopUp.classList.add('oculto');
}