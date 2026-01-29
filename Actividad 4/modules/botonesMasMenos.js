'use strict'

export function crearContador(contenedor, producto) {
  
  const btnMenos = contenedor.querySelector(".btnMenos");
  const btnMas = contenedor.querySelector(".btnMas");
  const valor = contenedor.querySelector(".numeroCantidad");
  const nodoTotal = contenedor.querySelector('.totalProducto span');

  valor.textContent = producto.unidades;

  btnMas.addEventListener("click", () => {
    producto.unidades++;
    valor.textContent = producto.unidades;
    //let unidadesActuales = producto.actualizarUnidades();
    //console.log(unidadesActuales)
    nodoTotal.textContent = `${(producto.getSubtotal()).toFixed(2)}${producto.currency}`;  
    });

  btnMenos.addEventListener("click", () => {
    if( producto.unidades > 0){
        producto.unidades--;
        valor.textContent = producto.unidades;
        nodoTotal.textContent = (`${(producto.getSubtotal()).toFixed(2)}${producto.currency}`);
        }
  });
}



