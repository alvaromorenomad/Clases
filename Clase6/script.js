'use strict'


// DATOS que vamos a PINTAR en la web
const alumnos = [ 'Marta', 'Marcos','Juan','Pepa','Laura', 'Manuel' ];
// Podemos sustituirlo por una llamada AL SERVDIDOR -> API


console.log( alumnos  )
console.log( alumnos[0]  )


// STRING
let str_html_alumnos = '';
for ( let i=0; i< alumnos.length; i++ ){

    console.log( alumnos[i] );
    str_html_alumnos += '<div class="ficha" >' + alumnos[i] + '</div>' 
    // debugger
}

console.log(str_html_alumnos);
const nodoGridAlumnos = document.querySelector( '#gridAlumnos' );
// nodoGridAlumnos.innerHTML= str_html_alumnos;



// grupo de sentencias que se repiten un numero INDETERMINADO de veces
let edad = 0;

while( edad < 18 ){

    edad++;
    console.log("Estoy en el bucle", edad);
}

console.log ('END');

// let juegoEncencido = true;
// let direccion = 'T'// T B R L 

// while( juegoEncencido ){

//     switch( direccion ){
//         case 'T':
//             mueveArriba();
//         break;
//         case 'B':
//             mueveAbajo();
//         break;
//         case 'R':
//             mueveDerecha();
//         break;
//         case 'L':
//             mueveIzquierda();
//         break;
//         case 'STOP':
//             juegoEncencido = false;
//         break;
//     }
// }


// CASO ESPECIAL: Recorrer un array COMPLETO
// For of

// Cosntruir HTML
let otro_str_html = ''
let color = 'azul';
for( const cadaAlumno of alumnos   ){
    // cadaAlumno es la variable donde va a estar el valor
    console.log("cadaAlumno")
    console.log(cadaAlumno)
    // otro_str_html += '<div class="ficha" > <h2>' + cadaAlumno + '</h2> <p>' + color + '</p></div>' 
    otro_str_html += `
        <div class="ficha" >
            <h2> ${ cadaAlumno } </h2>
            <p> #### ${ color } #### </p>
        </div>
    `

}
// TEMPLATE STRING
// sacar las variables. con ${  }
// let cadenaDeTextoTemplate = `
//     <div class="ficha" >
//         <h2> ${ cadaAlumno } </h2>
//         <p> ${ color } </p>
//     </div>
// `

// Pintar


nodoGridAlumnos.innerHTML = otro_str_html;

// for ( const indice in alumnos ){
//     console.log("indice")
//     console.log(indice)
//     console.log( alumnos[indice] )
// }




/**
 * 
 * 6! = (6*5) * 4 * 3 * 2 * 1
 *    = 30 * 4
 *      120 * 3
 *      360 * 2
 * 
 * 
 * 
 */



function factorial ( numero ){
    let acumulador = 1;
    for( let i = numero; i > 1 ; i-- ){
        acumulador = acumulador * i;
    }
    return acumulador;
}


const factorial_7 = factorial( 7 ) 
const factorial_0 = factorial( 0 ) 

console.log( factorial_0 )





/**
 * Cuando clicke -> Coger los valores de los input ( Seleccion de los nodos )
 * 
 * 
 * Seleccionar nodo nuevosAlumnos
 * 
 * Constyruir el HTML
 * 
 * Pintar en nuevos Alumnos
 * 
 * 
 */



function creaAlumnoNuevo(){

    const nodoEntradaNombre = document.querySelector('#entradaNombre');

    console.log(nodoEntradaNombre.value)
    
    const nodoEntradaColor = document.querySelector('#entradaColor');
    
    console.log(nodoEntradaColor.value)

    const nodoAlumnosNuevos = document.querySelector('#nuevosAlumnos');
    
    const nombreColor = getNameColor( nodoEntradaColor.value ); // Azul / Verde
    
    let str_html_nuevo_alumno = `
         <div class="ficha" style="background-color:${ nodoEntradaColor.value }" >
             <h2> ${ nodoEntradaNombre.value } </h2>
             <p> ${ nombreColor } </p>
         </div>
    `;
    
    nodoAlumnosNuevos.innerHTML = nodoAlumnosNuevos.innerHTML  +  str_html_nuevo_alumno;
}
/**
 * 
 * @param { string } color 
 * @returns 
 */
function getNameColor( color ){

    switch( color ){
        case 'lightblue':
            return 'Azul';
        case 'lightgreen':
            return 'Verde';
        default:
            return ''
    }
}





