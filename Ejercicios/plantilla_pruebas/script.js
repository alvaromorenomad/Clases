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

const nodoBtnCirculo = document.querySelector('#calcularCirculo');

const PI = 3.1416;

function diamentroCirculo (radio){
    const diametro = 2 * radio;
    console.log(diametro);
    return diametro;
}

function perimetroCirculo (radio){
    const perimetro = 2 * PI * radio;
    console.log(perimetro)
    return perimetro;
}

function areaCirculo (radio){
    const area = PI * radio * radio;
    console.log(area);
    return area;
}

function calcularCirculo (){
    const inputRadio = document.querySelector('#inputRadio');
    const radio = inputRadio.valueAsNumber;

    if (isNaN(radio)){
        const nodoContenedorCirculo = document.querySelector('#contenedorCirculo');
        nodoContenedorCirculo.innerHTML = `<div class='resultadosCirculo'>
                                                El número introducido no es válido
                                            </div>
        `
    }else{

        const nodoCirculoPrint = document.createElement('div');
        nodoCirculoPrint.classList.add('resultadosCirculo');

        const diametro = diamentroCirculo(radio);

        const nodoDiametroPrint = document.createElement('h3');
        nodoDiametroPrint.innerText = `El diámetro del círculo es ${diametro}`;
        nodoCirculoPrint.appendChild(nodoDiametroPrint);

        const perimetro = perimetroCirculo(radio);

        const nodoPerimetroPrint = document.createElement('h3');
        nodoPerimetroPrint.innerText = `El perímetro del círculo es ${perimetro}`;
        nodoCirculoPrint.appendChild(nodoPerimetroPrint);

        const area = areaCirculo(radio);

        const nodoAreaPrint = document.createElement('h3');
        nodoAreaPrint.innerText = `El área del círculo es ${area}`;
        nodoCirculoPrint.appendChild(nodoAreaPrint);

        const nodoContenedorCirculo = document.querySelector('#contenedorCirculo');
        nodoContenedorCirculo.innerHTML = ''; //esto se añade antes de la impresión final para que cada vez que se clique el botón no se acumulen los resultados. 
        nodoContenedorCirculo.appendChild (nodoCirculoPrint);
        }

}

nodoBtnCirculo.addEventListener('click', calcularCirculo);

const btnCalcularTablas = document.querySelector('#calcularTabla');

function generarTablas (){
    const nodoInputValue = document.querySelector('#inputMultiplicar');
    const valorTablas = nodoInputValue.valueAsNumber;

    const nodoGenerarTabla = document.querySelector('#contenedorTablas');

    nodoGenerarTabla.classList.add('tabla');
    nodoGenerarTabla.innerHTML = '';

    for(let multiplicador = 0; multiplicador <= valorTablas; multiplicador++){

        nodoGenerarTabla.innerHTML += crearTabla(multiplicador);
    }
    
}

function crearTabla (multiplicador){
    let str_tabla = `<div class=cadaTabla><h2>Tabla del ${multiplicador}</h2>`;

    for (let tabla = 0; tabla <= 10; tabla++){
        str_tabla += `<h3>${multiplicador} X ${tabla} = ${(multiplicador * tabla)}</h3>
        `
    }

    str_tabla += `</div>`;
    return str_tabla;
}

btnCalcularTablas.addEventListener('click', generarTablas);




