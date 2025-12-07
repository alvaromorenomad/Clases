function calcular_par(){
    const nodoNumero = document.querySelector('#numero')
    const nodoContendor = document.querySelector('.contendor')

    if (nodoNumero.value === '0'){
        nodoContendor.innerHTML =  '<h1>¡ES CERO!</h1>';
        nodoNumero.classList.add('amarillo');
    }else if (nodoNumero.value % 2 === 0){
        nodoContendor.innerHTML = `<h1>El ${nodoNumero.value} es PAR</h1>`;
        nodoNumero.classList.add('verde');
    }else {nodoContendor.innerHTML = `<h1>El ${nodoNumero.value} es IMPAR</h1>`;
        nodoNumero.classList.add('azul');} 
}


