'use strict'

const nodoBotonQuiz = document.querySelector('#botonComenzar');

function ejecucion_quiz(){
    const nombreQuiz = prompt('Por favor, introduce tu nombre');
    console.log(nombreQuiz);

    const nodoContenedorQuiz = document.querySelector('#contenedorQuiz');

    console.log(nodoContenedorQuiz)

    let str_html = `<p>${nombreQuiz}, `;

    const preguntaItalia = prompt(`${nombreQuiz}, ¿Cuál es la capital de Italia?`);

    if (preguntaItalia.trim().toLowerCase() === "roma" || preguntaItalia.trim().toLowerCase() === "rome"){
        const preguntaEspana = prompt(`${nombreQuiz}, ¿Cuál es la capital de España?`);
        
        if(preguntaEspana.trim().toLowerCase() === "madrid"){
            const preguntaFrancia = prompt (`${nombreQuiz}, ¿Cuál es la capital de Francia?`);

            if (preguntaFrancia.trim().toLowerCase() === "paris"){
                str_html += ` felicidades, todas las respuestas son correctas</p>`
                nodoContenedorQuiz.innerHTML = str_html;
            }else{
                str_html += `fallaste, ¡vuelve a intentarlo!</p>`;
                nodoContenedorQuiz.innerHTML = str_html;
            }
        }else{
            str_html += `fallaste, ¡vuelve a intentarlo!</p>`;
            nodoContenedorQuiz.innerHTML = str_html;
        }
    }else{
        str_html += `tienes que estudiar más</p>`;
        nodoContenedorQuiz.innerHTML = str_html;
    }

}

nodoBotonQuiz.addEventListener('click',ejecucion_quiz);



const nodoBtnCalcularMayor = document.querySelector('#btnMayorQue');

function calcularMayor (){
    const nodoPrimerNumero = document.querySelector('#numeroPrimer');
    const numeroUno = nodoPrimerNumero.valueAsNumber;
    const nodoSecondNumero = document.querySelector('#numeroSegundo');
    const numeroDos = nodoSecondNumero.valueAsNumber;
    
    let str_mayor_html = `<p>El número 1 (${numeroUno}) `;
    const nodoContenedorMayor = document.getElementById('contenedorNumeroMayor');

    if (numeroUno > numeroDos){
        str_mayor_html += `es MAYOR que el número 2 (${numeroDos}).</p>`;
        nodoContenedorMayor.innerHTML = str_mayor_html;
    }else if (numeroUno < numeroDos){
        str_mayor_html += `es MENOR que el número 2 (${numeroDos}).</p>`;
        nodoContenedorMayor.innerHTML = str_mayor_html;
    }else{
        str_mayor_html += `es igual al número 2 (${numeroDos}).</p>`;
        nodoContenedorMayor.innerHTML = str_mayor_html;
    }
}

nodoBtnCalcularMayor.addEventListener('click', calcularMayor);