'use strict'


const pi = 3.1416;

function calcular_diametro (radio){
    let diametro = 2 * radio;
    return diametro;
}

function calcular_perimetro (radio){
    let perimetro = 2 * pi * radio;
    return perimetro.toFixed(2); //para redondear decimales
}

function calcular_area (radio){
    let area = pi * radio * radio;
    return area;
}

function ejecutar_operaciones () {

    const nodoValorInput = document.querySelector ('#valor_radio');
    const radio = Number(nodoValorInput.value); //.value devuelve un string
    //.valueAsNumber devuelve un type Number

    let diametro = calcular_diametro(radio);
    let perimetro = calcular_perimetro(radio);
    let area = calcular_area(radio);

    const nodoContenedorTabla = document.querySelector ('#contenedor_tabla');
    nodoContenedorTabla.innerHTML = `
        <div class="resultados">
           <h3>Diámetro: ${ diametro } cm </h3> 

           <h3>Perímetro: ${ perimetro } cm </h3> 
        
           <h3>Área: ${ area } cm2 </h3>
        </div>`

}