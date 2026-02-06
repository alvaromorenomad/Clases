export function pintaProducto (producto){
    
    //div contenedor de producto (como si fuera iFhone) aqui se unen el resto de div
    
    const nodoDivPrincipal = document.createElement('div');
    nodoDivPrincipal.classList.add('contenedorProducto');

    //div producto individual

    const nodoDivProductoIndividual = document.createElement('div');
    nodoDivProductoIndividual.classList.add('productoIndividual');

    const nodoH3titulo = document.createElement('h3');
    nodoH3titulo.innerText = `${producto.titulo}`;
    const nodoH3ref = document.createElement('h3');
    nodoH3ref.innerText = `Ref: ${producto.sku}`;

    nodoDivProductoIndividual.appendChild(nodoH3titulo);
    nodoDivProductoIndividual.appendChild(nodoH3ref);

    //div class caja

    const nodoDivCaja = document.createElement('div');
    nodoDivCaja.classList.add('caja');

    const nodoSpanBtnMenos = document.createElement('span');
    nodoSpanBtnMenos.classList.add('btnMenos');
    nodoSpanBtnMenos.innerText = '-' ; 

    const nodoDivNumeroCantidad = document.createElement('div');
    nodoDivNumeroCantidad.classList.add('numeroCantidad');
    nodoDivNumeroCantidad.innerText = `0`;

    const nodoSpanBtnMas = document.createElement('span');
    nodoSpanBtnMas.classList.add('btnMas');
    nodoSpanBtnMas.innerText = '+';

    nodoDivCaja.appendChild(nodoSpanBtnMenos);
    nodoDivCaja.appendChild(nodoDivNumeroCantidad);
    nodoDivCaja.appendChild(nodoSpanBtnMas);

    //div class precio

    const nodoDivPrecio = document.createElement('div');
    nodoDivPrecio.classList.add('precio');

    const nodoSpanPrecio = document.createElement('span');
    nodoSpanPrecio.innerText = `${producto.precio}${producto.currency}`;

    nodoDivPrecio.appendChild(nodoSpanPrecio);

    //div class totalProducto

    const nodoDivTotalPrecio = document.createElement('div');
    nodoDivTotalPrecio.classList.add('totalProducto');

    const nodoSpanTotalPrecio = document.createElement('span');
    nodoSpanTotalPrecio.innerText = `0${producto.currency}`;

    nodoDivTotalPrecio.appendChild(nodoSpanTotalPrecio);

    //merge todo el div class contenedorPRoducto

    nodoDivPrincipal.appendChild(nodoDivProductoIndividual);
    nodoDivPrincipal.appendChild(nodoDivCaja);
    nodoDivPrincipal.appendChild(nodoDivPrecio);
    nodoDivPrincipal.appendChild(nodoDivTotalPrecio);

    const nodoCatalogo = document.querySelector('.catalogo');
    nodoCatalogo.appendChild(nodoDivPrincipal);

    return nodoDivPrincipal;
}

export function pintadoInformacionProducto (producto, instanciaCarrito, contenedor) {
    const extracion = instanciaCarrito.obtenerInformacionProducto(producto);

    //Pintado del subtotal

    const nodoTotal = contenedor.querySelector('.totalProducto span');
    nodoTotal.textContent = `${extracion.totalProducto}${extracion.moneda}`;

    if (extracion.unidades <= 0){
        nodoTotal.textContent = `0${extracion.moneda}`;
    }

    //pintado del subtotal en el carrito. Hay que hacerlo con innerHTML ya que createElement no sobreescribe y se acumulan las filas. Probado que creando fuera la estructura y utilizando la función solo para el valor NO funciona.

    //Ahora no se acumula pero solo se pinta una linea, se sobre escribe. INTENTAR SEPARAR LOS DOS PINTADOS EN FUNCIONES DISTINTAS

    /* const nodoCarritoSubtotal = document.querySelector('#carritoSubtotal');

    nodoCarritoSubtotal.innerHTML = 
    `<div>
        <p>${extracion.titulo}</p>
        <p>${extracion.totalProducto}${extracion.moneda}</p>
    </div>` */
}

export function pintadoInformacionProductoCarrito (instanciaCarrito){

    const nodoCarritoSubtotal = document.querySelector('#carritoSubtotal');

    nodoCarritoSubtotal.innerHTML = '';

    instanciaCarrito.productos.forEach(producto => {
        if(producto.unidades > 0){

            const extracion = instanciaCarrito.obtenerInformacionProducto(producto);

            const nodoDivSubtotal = document.createElement('div');
            const nodoLineaTituloSubtotal = document.createElement('p');
            const nodoLineaCantidadSubtotal = document.createElement('p');

            nodoLineaTituloSubtotal.textContent = `${extracion.titulo}`
            nodoLineaCantidadSubtotal.textContent = `${extracion.totalProducto}${extracion.moneda}`;

            nodoDivSubtotal.appendChild(nodoLineaTituloSubtotal);
            nodoDivSubtotal.appendChild(nodoLineaCantidadSubtotal);

            nodoCarritoSubtotal.appendChild(nodoDivSubtotal);
        }
    });

    if (extracion.unidades <= 0){
        nodoCarritoSubtotal.remove()
    }

}

export function pintadoPrecioTotal (instanciaCarrito){
    console.log('OK')
    const extracionCarrito = instanciaCarrito.obtenerCarrito();

    let resultadoFinal = extracionCarrito.total;

    const nodoTotalConjunto = document.querySelector('#totalConjunto');

    nodoTotalConjunto.innerHTML = `<p>${resultadoFinal.toFixed(2)}${extracionCarrito.moneda}</p>`

}



    

