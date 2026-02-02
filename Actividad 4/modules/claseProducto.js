'use strict'

export class Producto {
    constructor(titulo,sku,precio,unidades = 0){
        this.titulo = titulo;
        this.sku= sku;
        this.precio = precio;
        this.unidades = unidades;
        this.currency = '€';
    }

    getSubtotal(){
        return this.precio * this.unidades;
    }

    actualizarUnidades(){
        let unidadesActilizadas = '';
        unidadesActilizadas = `${this.sku} =  ${this.unidades}`;   
        return unidadesActilizadas;
    }

    obtenerInformacionProducto(){
        let informacionProducto = this.titulo;
        return informacionProducto;
    }

    getTotal(){
        let precioTotal = 0
        this.getSubtotal
    }
}






