'use strict'

// ATRIBUTOS DATA DE HTML / JS

//esto sirve para coger de los atributos de html el valor de los parámetro de una función. 

function creaContador(limite,texto,nodoHTML){
    
    if(limite === undefined || texto === undefined || nodoHTML === undefined){
        return;
    }
    
    let contador = 0;
    
    const span_numero = document.createElement('span');
    span_numero.classList.add('numero');
    const span_titulo = document.createElement('span');
    span_titulo.innerHTML = texto;

    const ref_interval = setInterval ( ()=>{
        contador = contador + 1;
        span_numero.innerHTML = contador;
        if (contador >= limite){
            clearInterval(ref_interval);
        }
    }, 2)

    nodoHTML.appendChild(span_numero);
    nodoHTML.appendChild (span_titulo)
    
}

const listaContadores = document.querySelectorAll('.datoCreciendo');

//a una lista de elementos iguales, bajo la misma clase, sacamos la lista y aplicamos a cada uno de ellos la función que cogerá la información del dataset;

for (let cadaContador of listaContadores){
    const limite = cadaContador.dataset.limite;
    const titulo = cadaContador.dataset.titulo;

    creaContador( limite, titulo, cadaContador);
}

class ContadorCreciendo{
    constructor(limite,titulo,nodoHTML){
        this.limite = limite;
        this.titulo = titulo;
        this.nodoHTML = nodoHTML;
        
        }
        start(){
            this.ref_interval = setInterval( ()=> {
            this.contador++;}, 1000);
        

       /*  this.contador = 0;
        this.ref_interval = setInterval( ()=> {
            this.contador++;

            if ( this.contador >= this.limite){
                clearInterval(this.ref_interval)
            }
        }); */
        
        }
        render(){
            //el que pinta el HTML

        }
}

const contador_1 = new ContadorCreciendo('1000', 'codigo',);

contador_1.start();




//Ejemplo clásico de clases y métodos

class Circulo{
    constructor( posX, posY, radio){
        this.posX = posX;
        this.posY = posY;
        this.radio = radio;

        this.fill = 'white';
    }

    getArea(){
        return this.radio * this.radio * Math.PI;
    }

    paint(){

    }

    setFill(color){
        this.fill = color;
        this.paint();
    }

}

const circulo1 = new Circulo(100,200,84);
circulo1.setFill('azul')
