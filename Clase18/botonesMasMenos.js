'use strict'

export function crearContador(contenedor, producto, lista) {
  
  const btnMenos = contenedor.querySelector(".btnMenos");
  const btnMas = contenedor.querySelector(".btnMas");
  const valor = contenedor.querySelector(".numeroCantidad");
  const nodoTotal = contenedor.querySelector('.totalProducto span');

  //construcción del elemento lineasSubtotal una vez fuera y luego en el click se rellena; Si en el click solo relleno, se crea el espacio del html antes del click. 
  
  const nodoCarritoSubtotal = document.querySelector('#carritoSubtotal');

  const nodoDivSubtotal = document.createElement('div');
        
  const nodoLineaTituloSubtotal = document.createElement('p');
  const nodoLineaCantidadSubtotal = document.createElement('p')

  btnMas.addEventListener("click", () => {
    nodoCarritoSubtotal.actualizarUnidades();
    valor.textContent = producto.unidades;
    
    nodoTotal.textContent = `${(producto.getSubtotal()).toFixed(2)}${producto.currency}`;  
      
    nodoDivSubtotal.appendChild(nodoLineaTituloSubtotal);
    nodoDivSubtotal.appendChild(nodoLineaCantidadSubtotal);
      
    nodoCarritoSubtotal.appendChild(nodoDivSubtotal);
    
    nodoLineaTituloSubtotal.textContent = `${producto.titulo}`
    nodoLineaCantidadSubtotal.textContent = `${(producto.getSubtotal()).toFixed(2)}${producto.currency}`;

    allTotal(lista, producto.currency);
    
    });
    

  btnMenos.addEventListener("click", () => {
    if( producto.unidades > 0){
        producto.unidades--;
        valor.textContent = producto.unidades;
        nodoTotal.textContent = (`${(producto.getSubtotal()).toFixed(2)}${producto.currency}`);

        nodoLineaTituloSubtotal.textContent = `${producto.titulo}`
        nodoLineaCantidadSubtotal.textContent = `${(producto.getSubtotal()).toFixed(2)}${producto.currency}`

        allTotal(lista, producto.currency);
        
        if(producto.unidades === 0){
          nodoDivSubtotal.remove();
        }
      }
  });
}

function allTotal(listaProductos, currency){
    let acumuladorTotal = 0;

    for (let producto of listaProductos){
        acumuladorTotal += producto.unidades * producto.precio;
    }

    const nodoTotalConjunto = document.querySelector('#totalConjunto');
    nodoTotalConjunto.innerHTML = `<p>${acumuladorTotal.toFixed(2)}${currency}</p>`;

}



