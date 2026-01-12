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

const nodoBtnPar = document.getElementById('btnNumeroPar');

function getNumeroPar (){
    const nodoNumeroIntroducido = document.querySelector('#numeroIntroducido');
    const numeroIntroducido = nodoNumeroIntroducido.valueAsNumber;

    let str_numero_par = `<p id="parrafo">El ${numeroIntroducido} es `

    const nodoParrafoInner = document.querySelector('#parrafo');
    
    const nodoContenedorPar = document.getElementById('contenedorNumeroPar');

    if (numeroIntroducido === 0){
        str_numero_par = `<p id="parrafo">El número intruducido es 0</p>`;
        nodoContenedorPar.innerHTML = str_numero_par;
        const nodoParrafoInner = document.querySelector('#parrafo');
        nodoParrafoInner.classList.remove(...nodoParrafoInner.classList);
        nodoParrafoInner.classList.add('amarillo');
    }else if (numeroIntroducido % 2 === 0){
        str_numero_par += `PAR</p>`;
        nodoContenedorPar.innerHTML = str_numero_par;
        const nodoParrafoInner = document.querySelector('#parrafo');
        nodoParrafoInner.classList.remove(...nodoParrafoInner.classList);
        nodoParrafoInner.classList.add('verde');
    }else if (isNaN(numeroIntroducido)){
        str_numero_par = `<p id="parrafo">No has introducido un valor válido</p>`;
        nodoContenedorPar.innerHTML = str_numero_par;
        const nodoParrafoInner = document.querySelector('#parrafo');
        nodoParrafoInner.classList.remove(...nodoParrafoInner.classList);
        nodoParrafoInner.classList.add('rojo');
    }else{
        str_numero_par += `IMPAR</p>`;
        nodoContenedorPar.innerHTML = str_numero_par;
        const nodoParrafoInner = document.querySelector('#parrafo');
        nodoParrafoInner.classList.remove(...nodoParrafoInner.classList);
        nodoParrafoInner.classList.add('azul');
    };
}

nodoBtnPar.addEventListener('click', getNumeroPar);

const nodoBtnSuma = document.querySelector('#btnCalcular');

function sumaImpares (){
    const nodoInputPequeno = document.getElementById('numeroPequeno');
    const numeroPequeno = nodoInputPequeno.valueAsNumber;
    const nodoInputGrande = document.getElementById('numeroGrande');
    const numeroGrande = nodoInputGrande.valueAsNumber;

    let acumulador = 0;

    for (let cadaNumber = numeroPequeno; cadaNumber <= numeroGrande; cadaNumber++){
        if (cadaNumber % 2 != 0){
            acumulador += cadaNumber;
            console.log(acumulador);

            const nodoContenedorSuma = document.querySelector('#contenedorSuma');

            nodoContenedorSuma.innerHTML = `<h3>El acumulado de los números impares es ${acumulador}</h3>

            `;

        }
    }
}

nodoBtnSuma.addEventListener('click', sumaImpares);