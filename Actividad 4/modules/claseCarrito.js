'use strict' 

export class Carrito{
    constructor(listaProductos){
        this.listaProductos = listaProductos;
    }

    actualizarUnidades(listaProductos){
        this.listaProductos.forEach((producto) => {
            let unidadActualizada = producto.sku * producto.unidades;
            return unidadActualizada;
        })
        
  
    }

    obtenerInformaciónProducto(sku){
        this.sku = sku;
        // Devuelve los datos de un producto además de las unidades seleccionadas

    }

    obtenerCarrito(){
        // Devuelve información de los productos añadidos al carrito

    }

    agregarProducto(producto, unidades = 1) {

    }
    
}

