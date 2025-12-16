'use strict'

let numeros_2 = [ 19,7,1,5,40,300,120,21,9,7,2];

function numeromayor(){
    let maximo = numeros_2 [0];
    for (cadaNumero of numeros_2){
        if (cadaNumero > maximo){
            maximo = cadaNumero;
        }

    }
    return maximo;
}   