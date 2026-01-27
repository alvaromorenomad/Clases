'use strict'

//FUNCIONAMIENTO BOTONES CANTIDAD

import { crearContador } from "./modules/botonesMasMenos.js"; 

//CLASE PRODUCTO Y LLAMADA API

import { Producto } from "./modules/claseProducto.js";

const URL_API = 'https://api.npoint.io/2ba130d5ba2c58c7b93f';

fetch(URL_API).then((respuesta) => {
    return respuesta.json()})
    .then((datos) => {

        const listaProductos = [];

        for (const producto of datos.products){
            const productoIndividual = new Producto (producto.title,producto.SKU,producto.price);

            listaProductos.push(productoIndividual);  
              
        }

        const contenedores = [
            document.querySelector('.ifhone'),
            document.querySelector('.cargador'),
            document.querySelector('.fundaPiel')
        ];

        listaProductos.forEach((producto, indice) => {
            const contenedor = contenedores[indice];
            
            const nodoInfo = contenedor.querySelector('.productosIndividual');
            nodoInfo.innerHTML = `
                <h3>${producto.titulo}</h3>
                <h3>Ref: ${producto.sku}</h3>
            `;

            const nodoPrecio = contenedor.querySelector('.precio span');
            nodoPrecio.innerText = `${producto.precio}${producto.currency}`;
            
            crearContador(contenedor, producto);

        });

        console.log(listaProductos[0].unidades);
        window.listaProductos = listaProductos;
    })


    

