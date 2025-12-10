'use strict'

//nombreUsuario = 'Nuevo valor';// NO SE PUEDE HACER en una constante
// En la ejecucicoon va a camabiar el nombre?

// const nombreUsuario = 'Luis';



// Selecciono y lo dejo preparado
// Variable GLOBAL


// DEFINE LA FUNCION
function quiz (){

    let str_html = '<div>  dime la capital de Italia ' // ESTO ES NUEVO E IMPORTANTE

    const nombreUsuario = prompt('Introduce el nombre');
    console.log(nombreUsuario);
    const respuesta1 = prompt (nombreUsuario+ 'dime la capital de Italia');
    const nodoRespueta = document.querySelector('#respuesta');
    str_html += respuesta1 + '</div>'
    //roma
    if( respuesta1 === 'Roma' || respuesta1 === 'roma' ){
        console.log('Correcto');
        const respuesta2 = prompt (nombreUsuario+ 'dime la capital de España');
        
        if( respuesta2 === 'Madrid' || respuesta2 === 'madrid' ){
            console.log('Correcto 2');
            
            const respuesta3 = prompt ( 'Capital de Francia');
            
            if(respuesta3 === 'París' ){
                // Variable FUERA como nombreUsuario
                
                // Variable LOCAL
                // const respuesta1 = prompt (nombreUsuario+', dime la capital de Italia');
                nodoRespueta.innerHTML = 'Enhorabuena '+nombreUsuario+ '! Sabes mucho!!'

            }else{

                // 
            }

            
        }else{
            console.log('Incorrecto 2');
        }
    }else{
        console.log('Incorrecto');
        nodoRespueta.innerHTML = 'Estudia más'
        // quiz();
   
    }

}

// EJECUTAR LA FUNCIÓN
// quiz()


// const edad = 20;

let edad = 10;



edad = edad + 1

// Ejercicio 3

/**
 * 
 * CUANDO -> Cuando hago Click
 * 
 * 
 * Seleccionar el input
 * Coger el valor del input
 * 
 * Calcular si es par o impar
 * 
 * Escribir en la web
 * 
 */



function escribirParImpar(){
    const nodoInputNumero = document.querySelector('#entradaNumero')
    console.log(nodoInputNumero)
    // const valorInput = nodoInputNumero.value;
    const valorInput = Number(nodoInputNumero.value);
    console.log(valorInput);
    console.log(typeof(valorInput));
    // console.log(nodoInputNumero.valueAsNumber);
    
    const nodoPar = document.querySelector('#divPar');

    if( valorInput === 0 ){
        nodoPar.innerHTML = '¡ES CERO!'
    }else{
        // VARIABLE LOCAL
        let str_texto = 'El número '+ valorInput
    
        if( isPar( valorInput ) === true){
            // nodoPar.innerHTML = 'ES PAR';
            str_texto = str_texto + ' ES PAR';
        }else{
            // nodoPar.innerHTML = 'ES IMPAR';
            str_texto = str_texto + ' ES IMPAR';
        }  

        if( isMultiplo3  ( valorInput ) ){
            str_texto = str_texto + ' y ES MULTIPLO DE TRES'
        }else{
            str_texto = str_texto + ' y NO ES MULTIPLO DE TRES'
        }
        // Dejar el pintado para el final
        nodoPar.innerHTML = str_texto

    }
}


// console.log(str_texto)

/**
 * Le pase un número 
 * y me diga es par o impar
 *  DEVUELVE: TRUE / FALSE
 * 
 */
function isPar( numero_parametro ){
    const resto = numero_parametro % 2;
    console.log('entrada', numero_parametro)
    if( resto === 0 ){
        console.log('TRUE')
        return true; // La salida de la función
    }else{
        console.log('FALSE')
        return false;//La salida de la función
    }
}

function isMultiplo3( numero_parametro ){
    const resto = numero_parametro % 3;
    console.log('entrada', numero_parametro)
    if( resto === 0 ){
        console.log('TRUE')
        return true; // La salida de la función
    }else{
        console.log('FALSE')
        return false;//La salida de la función
    }
}

function esMultiploDeTres(dividendo) {
  return (dividendo % 3) === 0;
}


const entrada_4 = 4;

const is_cuatro_par = isPar ( entrada_4 );
// TRUE
const is_tres_par = isPar ( 3 );
// FALSE


function saluda ( persona, apellido1, apellido3 ){
    console.log('Hola '+ persona + " " + apellido1 );
}

saluda( 'Pepe', 'J' );// nombre = 'Pepe'
saluda( 'María', 'R');// nombre = 'María'
saluda( 'Marta' ,'C');


// GLOBAL
let clicks = 0;


function contadorClics (){
    clicks++;// clicks = clicks + 1;
    console.log(clicks)
}



// IF ELSE IF ESE
let edad_usuario = 10;

if( edad_usuario < 2){
    console.log('Eres un bebé')
}else{
    // >= 2

    if( edad_usuario <12 && edad_usuario >= 2 ){
        // >=2 Y < 12
        console.log('Eres un niño')
    }else{
        //>=2 >= 12
        if( edad_usuario < 16 ){
            console.log('Eres un adolescente')

        }else{
            if(edad_usuario<65){
                
                console.log('Eres un adulto')
            }else{
                console.log('Estás jubilado ')

            }
        }
    }
}



/**
 * 
 * Cuando tenemos una variable de rango con varias interacciones
 * Cuando tengo muchas condiciones complejas con varias interacciones
 * 
 */
if(edad_usuario < 2){

}else if( edad_usuario <12 ){

}else if(edad_usuario < 16){

}else{

}

/**
 * VARIABLES que son DISCRETAS
 */
































