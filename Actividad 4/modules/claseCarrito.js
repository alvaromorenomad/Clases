'use strict' 

export class Carrito{
    constructor(producto){
        this.title = producto.title;
        this.price = producto.price;
        this.sku = producto.SKU;
    }

    actualizarUnidades(sku, unidades){
        this.sku = sku;
        this.unidades = unidades;
        return sku * unidades;
        // Actualiza el número de unidades que se quieren comprar de un producto
  
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

