'use strict'

function ejecucion_quiz (){
    const nombre_introducido = prompt('Introduce tu nombre')
    
    const pregunta_italia = prompt(`${nombre_introducido}, ¿Cuál es la capital de Italia?`);
    
    
    if (pregunta_italia === 'Roma' ||
        pregunta_italia === 'roma' ||
        pregunta_italia === 'rome' ||
        pregunta_italia === 'Ciudad de Roma' ||
        pregunta_italia === 'ciudad de roma' ||
        pregunta_italia === 'Rome'){
        const pregunta_francia = prompt(`${nombre_introducido}, ¿Cuál es la capital de Francia?`);
            if(pregunta_francia === 'Paris' ||
            pregunta_francia === 'paris' ||
            pregunta_francia === 'París' ||
            pregunta_francia === 'parís')
            {const pregunta_alemania = prompt(`${nombre_introducido}, ¿Cuál es la capital de Alemania?`);
                if(pregunta_alemania === 'Berlin' ||
                pregunta_alemania === 'berlin' ||
                pregunta_alemania === 'Berlín' ||
                pregunta_alemania === 'berlín')
                {const nodoFeedback = document.querySelector('#contenedor_respuestas');
                nodoFeedback.innerHTML = `Felicidades ${nombre_introducido}, todas las respuestas son correctas`;
                }else{const nodoFeedback = document.querySelector('#contenedor_respuestas');
                nodoFeedback.innerHTML = `${nombre_introducido}, fallaste, ¡vuelve a intentarlo!`;
                }
            }else{const nodoFeedback = document.querySelector('#contenedor_respuestas');
            nodoFeedback.innerHTML = `${nombre_introducido}, fallaste, ¡vuelve a intentarlo!`;
            }
    }else{const nodoFeedback = document.querySelector('#contenedor_respuestas');
        nodoFeedback.innerHTML = `${nombre_introducido}, tienes que estudiar más`;
    }
}


