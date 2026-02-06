'use strict'

//FUNCIONAMIENTO BOTONES CANTIDAD

import { pintaProducto  } from "./modules/funcionesPintado.js";

import { pintadoInformacionProducto } from "./modules/funcionesPintado.js";

import { pintadoInformacionProductoCarrito } from "./modules/funcionesPintado.js";

import { pintadoPrecioTotal } from "./modules/funcionesPintado.js";

//CLASE PRODUCTO Y LLAMADA API

import { Producto } from "./modules/claseProducto.js";

import { Carrito } from "./modules/claseCarrito.js";
 
const URL_API = 'https://api.npoint.io/2ba130d5ba2c58c7b93f';

fetch(URL_API).then((respuesta) => {
    return respuesta.json()})
    .then((datos) => {

        //traida de los datos de la API;

        const listaProductos = [];
        
        const carrito = new Carrito();

        for (const producto of datos.products){
            const productoIndividual = new Producto (producto.title,producto.SKU,producto.price);
            const nodoProducto = pintaProducto(productoIndividual)
    
            
            const btnMas = nodoProducto.querySelector(".btnMas");
            btnMas.addEventListener("click", ()=> {
                
                if(carrito.productos.includes(productoIndividual)){
                    carrito.actualizarUnidades(productoIndividual);

                    const valor = nodoProducto.querySelector(".numeroCantidad");
                    valor.textContent = productoIndividual.unidades;  
                }else{
                    carrito.agregarProducto(productoIndividual);
                    const valor = nodoProducto.querySelector(".numeroCantidad");
                    valor.textContent = productoIndividual.unidades;
                }

                pintadoInformacionProducto(productoIndividual,carrito,  nodoProducto);
                
                pintadoPrecioTotal(carrito);

                pintadoInformacionProductoCarrito(carrito);

                
            })

            const btnMenos = nodoProducto.querySelector(".btnMenos");

            btnMenos.addEventListener("click", ()=> {
                
                if(carrito.productos.includes(productoIndividual)){
                    carrito.restarUnidades(productoIndividual);

                    const valor = nodoProducto.querySelector(".numeroCantidad");
                    valor.textContent = productoIndividual.unidades;
                }
                
                pintadoInformacionProducto(productoIndividual,carrito,nodoProducto);
                
                pintadoPrecioTotal(carrito);

                pintadoInformacionProductoCarrito(carrito);

                
            })

            listaProductos.push(productoIndividual);  
              
        }

        
 /*        listaProductos.forEach((producto) => {
    
            //const nodoProducto = pintaProducto(producto);
            crearContador(nodoProducto,producto,listaProductos);
            //let unidadesActuales = producto.actualizarUnidades();
            //console.log(unidadesActuales)
            }) */

        
        console.log(carrito.productos)
        console.log(listaProductos[0].unidades);
        window.listaProductos = listaProductos; 
        })


