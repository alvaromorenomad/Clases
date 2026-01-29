'use strict'

export class Producto {
    constructor(titulo,sku,precio,unidades = 0){
        this.titulo = titulo;
        this.sku= sku;
        this.precio = precio;
        this.unidades = unidades;
        this.currency = '€';
    }

    getTotal(){
        return this.precio * this.unidades;
    }

    


    //crear un método aqui para poder sacar la información de los productos y pintarlo
}






