'use strict'

const nombre_introducido = prompt('Introduce tu nombre');

console.log(nombre_introducido);

function primera_pregunta(){
    const pregunta_italia = prompt(`${nombre_introducido}, ¿Cuál es la capital de Italia?`);

    console.log(pregunta_italia);

    if (pregunta_italia === 'Roma' ||
        pregunta_italia === 'roma' ||
        pregunta_italia === 'rome' ||
        pregunta_italia === 'Ciudad de Roma' ||
        pregunta_italia === 'ciudad de roma' ||
        pregunta_italia === 'Rome'
    ) {
        alert(`${nombre_introducido}, puedes ir a la segunda pregunta`);
    } else {alert(`${nombre_introducido}, tienes que estudiar más`)}
    }


    /**Desde aquí está mal. La constante pregunta_italia está fuera de la función y no puede comprobar si es correcta para ejecutar esto
     * 
     * También se puede cambiar el proceso y que sea solo por prompts y alerts. Empezando por un botón de start que cuando lo clicas inicia un evento on click, en el que saque el primer prompt y ya empiece la ejecución. 
    */


    function segunda_pregunta(){

    if (pregunta_italia = True){
        const pregunta_fracia = prompt(`${nombre_introducido}, ¿Cuál es la capital de Francia?`)

        console.log(pregunta_francia)
    }

} 


    /**
 * A la segunda pregunta solo se accede si la primera pregunta es correcta. Si el usuario no acierta, salta un pop up con el nombre y la frase tienes que estudiar más.
 * 
 * s
 * 
 * 
 */