'use strict'

const imagenes = [
    {
        url:"https://picsum.photos/200/300",
        clases:"animal"
    },

    {
        url:"https://picsum.photos/seed/picsum/200/300",
        clases:"naturaleza",
    },
    
    {
        url:"https://picsum.photos/id/237/200/300",
        clases:"animal",
    }
]

// API -> Una API REST va a "rellenar" la información de la web. 

console.log(imagenes);

//METODO FIND

//El método Find usa entre paréntesis una función. 
// cadaElemento del array se refiere a cada elemento del array, como si hiciera un for invisible dentro de la lista.
//solo encuentra el primer elemento de una lista. 

const imagenEncontrada = imagenes.find( function( cadaElemento ){
    if (cadaElemento.clases === "animal"){
        return true;
    }else{
        return false;
    }

} )

console.log(imagenEncontrada);

//FILTER

//Esto encuentra todos los elementos que coinciden. Es lo mismo que lo anterior pero yo he usado el arrow function. En el caso de que una función se pueda escribir en una sola línea y devuelven cosas, se puede simplificar con una arrow function.

const imagenEncontradas = imagenes.filter( (elementosArray) => elementosArray.clases === "animal" )

console.log(imagenEncontradas);

//MAP

//Transforma el array en otro array de la misma longitud, pero modificado con la función que le pasemos. 

const imagenes_url = imagenes.map((elementos) => elementos.url)

console.log(imagenes_url);

//OBJETOS

let pelicula = {
    titulo: 'Toy Story',
    director: 'Pixar',
    fecha: 1990,
    getAnosCartelera: function(){
        const hoy = new Date();
        const year = hoy.getFullYear();

        const anosCartelera = year - this.fecha;
        return anosCartelera;
    }
}

const tiempoCartelera = pelicula.getAnosCartelera();
console.log ( tiempoCartelera);

let pelicula2 = {
    titulo: 'Avatar',
    director: 'James Cameron',
    fecha: 2006,
    getAnosCartelera: function(){
        const hoy = new Date();
        const year = hoy.getFullYear();

        const anosCartelera = year - this.fecha;
        return anosCartelera;
    }
}

const tiempoCartelera2 = pelicula2.getAnosCartelera();
console.log (tiempoCartelera2);

// CLASES -> Son plantillas o prototipos. Las variables de las clases se tienen que comenzar con Mayúscula. Las clases son representaciones de las ideas que podemos utilizar para crear objetos del mundo cotidiano. En realidad, una clase es un constructor de objetos. Es la plantilla para crear objetos de arriba sin miedo a que cometamos typos. 

class Pelicula{
    constructor (titulo, director, fecha){
        this.titulo = titulo;
        this.director = director;
        this.fecha = fecha;
        
        if (this.year < 1980){
            this.color = "B/N"
        }else{
            this.color = "Color"
        }

        //Lo anterior define un atributo condicional que depende de la información anterior para dar un valor u otro. No va por parámetro porque es condicional. 

        this.reparto = []; //Se pueden crear parámetros vacios y decidir que no entren por parámetro. 

        
        

        //dentro del constructor van todos los elementos que luego serán instancias del objeto. Se tienen que definir los atributos del objeto con this.attr = attr para que la clase sepa que tiene que utilizar para si misma los atributos que se dan. Hay que hacer esto siempre que queramos que los atributos se vean fuera del objeto, pero podríamos no querer hacer esto. This va a ser el contexto que vaya a tener el objeto. 
    }

    getAnosCartelera(){
        const hoy = new Date();
        const year = hoy.getFullYear();

        return year - this.fecha;
    }
    //fuera del constructor, van los métodos;
    //Ahora todos los objetos de las clases pueden usar este método. La definición de la función es como la anterior, no como en el objeto. 
    
    addActor( actor ){

        this.reparto.push (actor); 
        //como hemos creado una lista vacía, con un método podemos añadir actores al reparto. Supongo que si lo hicieramos por parámetro en el constructor, no haría falta esto pero habría que rellenarlo. 
    }

    getHTML(){
        //const nodoGridPeliculas = document.querySelector('#gridPeliculas');
        
        const div = document.createElement(div);
        div.innerHTML = this.titulo;

        //nodoGridPelicula.appendChild(nodoGridPeliculas);
        return div;
    }
}



const pelicula_1 = new Pelicula('Toy Story', 'Pixar', 1990);

//Con lo anterior, he creado una instancia de la clase película. La instancia, el objeto creado a partir de la clase, utilizará la plantilla para crear un objeto y es lo que se podrá ver.

console.log(pelicula_1);

const pelicula_2 = new Pelicula('Jurasik Park', 'Steven Spielberg', 1992);
console.log(pelicula_2);

console.log(pelicula_2.getAnosCartelera())

pelicula_1.addActor( 'Buzz' );

//Imaginemos que para los actores, necesitamos crear un subobjeto. tiene propiedades y de igual manera se podría parametrizar una clase hija para no tener que crear por parámetro o método todo esto. 

class Actor{
    constructor( nombre, apellidos, fechaNacimiento, retirado) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fechaNacimiento = fechaNacimiento;
        this.retirado = retirado;
    }

    jubilar(){
        this.retirado = true;
    }
}

const actor1 = new Actor ('Woody', 'Harrelson', 1996, true);

pelicula_1.addActor(actor1);
console.log(pelicula_1);

function pinta( pelicula ){
    const html_pelicula = pelicula_1.getHTML();


}