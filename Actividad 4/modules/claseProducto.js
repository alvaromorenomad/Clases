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


/* const URL_API = 'https://api.npoint.io/949b9985876c9894510e';

fetch(URL_API).then((peticion) => {
    return peticion.json();
}).then((datos) => {
    


    for (let producto of datos.products){
        const unicoProducto = new Producto(producto.title, producto.SKU, producto.price, datos.currency);
        productos.push(unicoProducto);
    }

    

    //a lo mejor esto solo tiene que pintar los datos, pero no tiene que estar dentro de una clase

    

    console.log(productos);
    console.log(productos[0]);
})

 */



