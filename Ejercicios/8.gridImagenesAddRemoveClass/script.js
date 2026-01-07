'use strict'

const nodoTodos = document.querySelectorAll ('.imagen');
const nodoFuego = document.querySelectorAll ('.fuego');
const nodoAgua = document.querySelectorAll ('.agua');
const nodoTierra = document.querySelectorAll ('.tierra');

const nodoBotonTodos =  document.querySelector ('#todasFotos');
const nodoBotonTierra =  document.querySelector ('#todosTierra');
const nodoBotonAgua = document.querySelector ('#todosAgua');
const nodoBotonFuego =  document.querySelector ('#todosFuego');

nodoBotonTodos.addEventListener('click', function(){
    for (const cadaImagen of nodoTodos){
        cadaImagen.classList.remove('oculto');
    }
});

nodoBotonTierra.addEventListener('click', function(){
    for (const noTierra of nodoTierra) {
        noTierra.classList.remove('oculto');
    }
    for (const noTierra of nodoFuego){
        noTierra.classList.add('oculto');
    }
    for (const noTierra of nodoAgua){
        noTierra.classList.add('oculto');
    }
});

nodoBotonAgua.addEventListener('click', function(){
    for (const noAgua of nodoAgua) {
        noAgua.classList.remove('oculto');
    }
    for (const noAgua of nodoFuego){
        noAgua.classList.add('oculto');
    }
    for (const noAgua of nodoTierra){
        noAgua.classList.add('oculto');
    }
});

nodoBotonFuego.addEventListener('click', function(){
    for (const noFuego of nodoFuego) {
        noFuego.classList.remove('oculto');
    }
    for (const noFuego of nodoAgua){
        noFuego.classList.add('oculto');
    }
    for (const noFuego of nodoTierra){
        noFuego.classList.add('oculto');
    }
});


//function mostrarFuego (){
//    for (const noFuego of nodoFuego) {
//        noFuego.classList.remove('oculto');
//    }
//    for (const noFuego of nodoAgua){
//        noFuego.classList.add('oculto');
//    }
//    for (const noFuego of nodoTierra){
//        noFuego.classList.add('oculto');
//    }
//}
//
//function mostrarAgua (){
//    for (const noAgua of nodoAgua) {
//        noAgua.classList.remove('oculto');
//    }
//    for (const noAgua of nodoFuego){
//        noAgua.classList.add('oculto');
//    }
//    for (const noAgua of nodoTierra){
//        noAgua.classList.add('oculto');
//    }
//}
//
//function mostrarTierra (){
//    for (const noTierra of nodoTierra) {
//        noTierra.classList.remove('oculto');
//    }
//    for (const noTierra of nodoFuego){
//        noTierra.classList.add('oculto');
//    }
//    for (const noTierra of nodoAgua){
//        noTierra.classList.add('oculto');
//    }
//}
//
//function mostrarTodo(){
//    for (const cadaImagen of nodoTodos){
//        cadaImagen.classList.remove('oculto');
//    }
//}
//

