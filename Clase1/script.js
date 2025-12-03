'use strict'

console.log('Archivo cargado desde fuera')

let cajas_almacen;

cajas_almacen = 190;

cajas_almacen = 154;

console.log ('Numero cajas') // pinta la cadena de texto
console.log (cajas_almacen) // pinta la variable

function escribe_por_consola(){
    console.log('Botón clicado');
}

let dia;
switch (dia) {
    case 0:
    dia = "Lunes";
    break;
    
    case 1:
    dia = "Martes";
    break;
    
    case 2:
    dia = "Miércoles";
    break;
    
    case 3:
    dia = "Jueves";
    break;
    
    default:
    dia = "Error";
}
console.log(dia);

let i = 0;
for (i = 0; i < 10; i++){
    console.log (i);
}

const arr = ["a","b","5"];
let indice;
for (indice in arr){
    console.log(indice);
    console.log(arr[indice]);
}

let x = 1;
const n = 5;
do {
    console.log(i);
    i++;
} while (i <= n);
