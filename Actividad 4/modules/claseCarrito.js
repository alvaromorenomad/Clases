'use strict' 

export class Carrito{
    constructor(){
        this.productos = [];
    }

    agregarProducto(producto){
        this.productos.push(producto);
        producto.unidades = 1;
    }

    actualizarUnidades(producto){
        producto.unidades++;
    }

    restarUnidades(producto){
        if(producto.unidades > 0){
           producto.unidades--; 
        }
    }

    obtenerInformacionProducto(producto){
        let sumaSubtotal = producto.precio * producto.unidades;

        return {
            titulo: producto.titulo,
            sku: producto.sku,
            unidades: producto.unidades,
            totalProducto: (sumaSubtotal).toFixed(2),
            moneda: producto.currency
        }
        
    }

    obtenerCarrito(){
        let carritoFinal = this.productos;

        let  sumaTotal = 0;
        
        carritoFinal.forEach((producto) => {
            let sumaSubtotal = producto.precio * producto.unidades; 
            sumaTotal += sumaSubtotal;
        })

        return {
            carritoTotal: carritoFinal,
            total: sumaTotal,
            moneda: carritoFinal[0].currency 
        }
    }


}


