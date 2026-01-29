'use strict'

//FUNCIONAMIENTO BOTONES CANTIDAD

import { crearContador } from "./modules/botonesMasMenos.js"; 

//CLASE PRODUCTO Y LLAMADA API

import { Producto } from "./modules/claseProducto.js";

const URL_API = 'https://api.npoint.io/2ba130d5ba2c58c7b93f';

fetch(URL_API).then((respuesta) => {
    return respuesta.json()})
    .then((datos) => {

        //traida de los datos de la API;

        const listaProductos = [];

        for (const producto of datos.products){
            const productoIndividual = new Producto (producto.title,producto.SKU,producto.price);

            listaProductos.push(productoIndividual);  
              
        }
        
        listaProductos.forEach((producto) => {
            const nodoProducto = pintaProducto(producto);
            crearContador(nodoProducto,producto);
            })

        console.log(listaProductos[0].unidades);
        window.listaProductos = listaProductos; 
        })


function pintaProducto (producto){
    
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
    nodoDivNumeroCantidad.innerText = `${producto.unidades}`;

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
    nodoSpanTotalPrecio.innerText = `${(producto.getTotal()).toFixed(2)}${producto.currency}`;

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


    

