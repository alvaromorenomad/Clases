# JAVASCRIPT


HTML -> Lenguaje de marcado

JS -> Programar

## Operadores Lógicos

### NEGACION (!)

| variable | !Variable1 |
|---------|-------|
|TRUE|  FALSE
| FALSE | TRUE

### AND ( && )

| cond1 | cond2 | cond1 AND cond2
|---------|-------|-------|
|TRUE|  TRUE  |  TRUE
|TRUE|  FALSE  |  FALSE
|FALSE|  TRUE  | FALSE  
|FALSE|  FALSE  |  FALSE


### OR ( || )

| cond1 | cond2 | cond1 OR cond2
|---------|-------|-------|
|TRUE|  TRUE  |  TRUE
|TRUE|  FALSE  |  TRUE
|FALSE|  TRUE  | TRUE  
|FALSE|  FALSE  |  FALSE

## Ejecutar funciones después de la ejecución. 

Para ejecutar funciones después de la ejecución de la DOM y del JS, a nuestro antojo, se puede hacer a través del setTimeout y del setInterval. 

### setTimeout

Gracias a esta operación, un código se va a ejecutar un tiempo personalizado después de la ejecución o de dar la orden. 

```js

setTimeout (function(){
    nodoPopUp.classList.remove('activo')
} , 1000)

```

### setInterval

Con esta operación, un código se va a repetir cada X tiempo que nosotros decidamos.

```js
setInterval(function() {
 console.log("hola");
 }, 1000);

```
En el ejemplo anterior, cada 1 segundo se escribirá "hola" en la consola. 

## Seleccionar NODOS HTML
### 1. Usar un identificador
Todos los identificadores UNICOS generan una variable en JS con el mismo nombre.

```html
<div id="contenedor_main">
    <h2> Hola cabecera </h2>
</div>

```
### 2. Usar querySelector y querySelectorAll ( RECOMENDADO )

```js

// La MEJOR opción para seleccionar SOLO un elemento
let nodoContenedorMain = document.querySelector( '#contenedor_main' );

// Cuando queremos seleccionar más de uno
let listaNodosVerde = document.querySelectorAll('.verde'); 
```
Sin embargo, esto solo selecciona, lo que quieras hacerle a todos los elementos lo tienes que pasar por bucle For Of(encargado de pasar por todos los elementos de una lista)

NOTA: Puedo usar estos métodos sobre cualquier tipo de nodo html que tenga en JavaScript. document es el Nodo del DOM, pero se puede acotar seleccionando un nodo previamente en JS. 

```html

    <div id="principal">
        <h2>Viva JavaScript</h2>
        <div class="cuadrado"></div>
        <div class="cuadrado"></div>
        <div class="cuadrado"></div>
    </div>

    <div class="gridCuadrados">
        <div class="cuadrado"></div>
        <div class="cuadrado"></div>
        <div class="cuadrado"></div>
        <div class="cuadrado"></div>
        <div class="cuadrado"></div>

    </div>

```


```js
// Estamos buscando en document -> en el nodo principal que es la web
const nodoPrincipal = document.querySelector('#principal')

console.log(nodoPrincipal);
console.log(nodoPrincipal.id);
nodoPrincipal.style.color = 'red';


// si sustituyo document por cualquier nodo html para hacer la búsqueda también se puede hacer. También se pueden combinar 
const listaNodosCuadrados = nodoPrincipal.querySelectorAll('.cuadrado');
console.log(listaNodosCuadrados)

```

En este ejemplo, nodoPrincipal coge todos los cuadrados que sean hijos del #principal. También se puede combinar selectores en el queryselector. 

## Pintar en la web

Primero seleccionar un nodo


1. Cuando solo hay elemento seleccionado a la vez Queryselector.
```js

let nodoContenedorMain = document.querySelector( '#contenedor_main' );
nodoContenedorMain.innerHTML = '<h1>Nuevo Código añadido por JS</h1>';

```
2. Cuando hay varios elementos, utilizamos el QueryselectorAll seguido de la clase. 

```js

let nodosContentedores = document.querySelectorAll ('.contenedores')
//Para pintar en todos los elementos, utilizar un bucle For 

```


Para mantener el contenido
```js
contenedor_main.innerHTML = contenedor_main.innerHTML + '<h1 class="destacado" >Nuevo Código añadido por JS</h1>'
// Equivalente
contenedor_main.innerHTML +=  '<h1 class="destacado" >Nuevo Código añadido por JS</h1>'

console.log(contenedor_main);

```

NOTA: Generar el elemento html completo antes de pintar. Ejemplo:

```js
let str_html_alumnos = '';
for (let x = 0; x < alumnos.length; x++){

    console.log(alumnos[x] );
    str_html_alumnos += '<div class="ficha">' + alumnos[x] + '</div>';
}

const nodoGridAlumnos = document.querySelector('#gridAlumnos');
nodoGridAlumnos.innerHTML = str_html_alumnos;
```

NOTA 2: Usar Template String. Siempre tiene que estar completo a la hora de pintar.
```js
${ variable } 

```

## Pintar en la web creando elementos // Crear nodos HTML con JS: CreateElement y appendchild

A parte de innerHTML, hay otra forma de pintar en la web, es mediante a la creación de elementos HTML. Esta opción en la recomendada ya que no sobreescribe constantemente el archivo HTML, si no que va creando elementos puros cuando se disparan. 

Para hacer esto, se utiliza una combinación entre createElement y appendChild. 

```js

function pintarAlumnoAppend(nombreAlumno){
    //crear elementos nuevos

    const nodoAlumno = document.createElement('div');
    
    nodoAlumno.classList.add('alumno');

    const nodoH2 = document.createElement('h2'); 
    nodoH2.innerHTML = nombreAlumno

    const nodoBoton = document.createElement('button');
    nodoBoton.innerHTML = 'Seleccionar';

    nodoBoton.addEventListener('click',function(){
        nodoBoton.classList.add('verde')
    })

    nodoAlumno.appendChild(nodoH2);
    nodoAlumno.appendChild(nodoBoton);

    //pintado

    const nodoGridAlumnos = document.querySelector('#gridAlumnos');
    nodoGridAlumnos.appendChild(nodoAlumno);
}


```

## Eventos

### 1. Atributo dentro de HTML 

Uso un atributo de evento y tengo el nombre de la función con ()

```html
  <button onclick="escribe_por_consola()" > ¡Click me! </button>
```

```js
function escribe_por_consola(){
    console.log('Botón clicado');
}
```

### 2.  AddEventListener (RECOMENDADA)

Este modelo es para crear muchos eventos en un elemento. El atributo onclick solo se puede utilizar una vez. 

```js const nodoMiBoton = document.querySelector('#miBoton');

//el primer parámetro del evento tiene que ser el nombre del evento, el segundo nombre del evento es una función que se tiene que ejecutar en ese punto (la función se puede poner de cualquieras de la manera que conocemos: normal creándola fuera, anónimas, arrow, etc)

nodoMiBoton.addEventListener('click', function(){
     // Aquí irían las instrucciones de ejecución

});

```

## Añadir y quitar clases

```js
  const nodoCuadrado = document.querySelector( '#miCuadrado' )
    console.log( nodoCuadrado )

    // Añadir una clase a cualquier NODO HTML INDIVIDUAL

    nodoCuadrado.classList.add( 'rotando' )
```

## Cambiar el estilo de un elemento. 

```js
//.style. puedo accer a cualquier propiedad de CSS
cadaNodo.style.widht = anchoCuadrados + 'px';
```



## For
Un trozo de código que se repite un número **DETERMINADO** de veces-

1. Primera versión de for


```js
for( let i = 0; i<10 ; i++ ){
    console.log('Hola: ', i);
}
```

2. Otras versiones: 

### FOR OF (solo cuando quiero recorrer un array COMPLETO) en sus valores:

```js
for (const cadaAlumno of Alumnos){
    console.log(cadaAlumno);
}
```

```js
const limite = 100;
let respuesta = false;
for (const cadaNumero of numeros){
    console.log (cadaNumero)
    if (cadaNumero >= limite){
        respuesta = true;
        //break // Esta sentencia rompe el bucle cuando se cumple la condición, ya que al ser booleano solo necesita una coincidencia y el resto es tonteria.
        return respuesta; // Es una opción mejor que el break, ya que cuando se encuentra un return se deja de ejecutar. 
        console.log('Esto no se ejecuta');
    }
}


```

### FOR IN (Es un ciclo para recorrer los índices )

```js
for (const indice in alumnos){
    console.log(indice)
}
```

## While

Un grupo de sentencias que se repiten un número INDETERMINADO de veces. Se utiliza muy poco comparado con el For porque es muy peligroso. El enemigo de la progración son los bucles infinitos, y esto es muy dado a ello. 
```js
let edad = 0;

while ( edad < 18 ){
    edad++;
    console.log("Estoy en el bucle", edad);

}
```

## Acceder a valores de input

```js
const nodoInputNumero = document.querySelector ('#entradaNumero')
console.log(nodoInputNumero);
const valorInput = nodoInputNumero.value; //String
console.log(nodoinputnumero.valueAsNumber); //Para transformar a Number, normalmente el programa te lo hace, pero mejor usar esto o Number para transformar el tipo a Number. 
```

## SWITCH

```js

// DIA de hoy

const hoy = new Date();
const dia = hoy.getDay();
console.log(hoy);
console.log(dia);

/**
 * VARIABLES DISCRETAS
 * 
 * En el método anterior, en el día que te devuelve un número correspondiente al dia de la semana empezando en 0 con el domingo. Son valores discretos. Una variable discreta es un tipo de variable que solo puede tomar un número finito o contable de valores, generalmente enteros, y no puede tener valores intermedios entre dos valores consecutivos
 */

let nombreDia= '';

if (dia === 0){
    nombreDia = 'Domingo';
}else if (dia === 1){
    nombreDia = 'Lunes';
}

// solo sirve para cuando tenemos variables discretas y estamos preguntando por IGUALDAs. 

switch (dia){
    case 0: 
        nombreDia = 'Domingo';
        break;
    case 1: 
        nombreDia = 'Lunes';
        break;
    case 2: 
        nombreDia = 'Martes';
        break; 
        // Palabra reservada que rompe la ejecución en cualquier punto en el que se encuentre.  
    case 3:
        nombreDia = 'Miercoles';
        break;
    case 4:
        nombreDia = 'Jueves';
        break;
    default:
        nombreDia = 'Error';
}
```



## Funciones

Trozo de código que tiene un nombre. Sirven para aislar funcionalidad y dar RESPONSABILIDAD a cada módulo. 

Hay que tratar que las funciones solo hagan una cosa (BUENA PRÁCTICA). Una función debe verse en menos de una pantalla. 

Crean un contexto nuevo. 

```js

//El cometido de esta función es pintar en la web. Modifica el sistema
function saluda(nombre, apellido){
    nodoPrincipal.innerHTML = 'Hola ' + nombre + ' ' + apellido
}

//El cometido de esta función es devolver un resultado. 

function isPar( numero_parametro ){
    const resto = numero_parametro % 2;
    console.log('entrada', numero_parametro)
    if( resto === 0 ){
        console.log('TRUE')
        return true; // La salida de la función
    }else{
        console.log('FALSE')
        return false;//La salida de la función
    }
}

```

Otra forma a parte de la clásica para definir funciones es;

### Arrow function

Necesitan ser definidas antes de ejecutarse. No crean nuevos contextos, acceden al contexto superior. Se utiliza mucho en REACT.

```js
// ARROW FUNCTION

const otroSaludo = (nombre, apellido) => {
    console.log ('Saludo otra vez a' + nombre + apellidos)
}
```

### Función pura

Esta es una función que independientemente las veces que se ejecute, siempre va a dar el mismo resultado. 

## IF Abreviado 

```js
let nombre = 'manu'

let texto_1= ( condicion ) ? 'Lo que ocurre cuando se cumple' : 'Cuando no se cumple'; //Esto es un ejemplo sintactico. 

let texto = (  nombre === 'manu') ? console.log('OK') : console.log  ('NOK');

```



## MÉTODOS

Cuando definimos un tipo de dato, vamos a tener un tipo de herramientas concreto (métodos):

### NUMBER

1. toFixed (redondear)

### ARRAYS

1. Push (añadir un elemento al final de la lista/array/)
2. Pop (Elimina el último elemento)
3. includes (Te dice si hay un elemento en la lista): frutas.includes('Manzana')
4. unshift (para añadir un elemento al principio)
5. shift (para eliminar el primer elemento)
6. reverse (dar la vuelta al array)

Nota: Hay elementos que mutan el objeto principal (push, includes, etc.), y esto es importante saberlo por el desarrollo en React. 

## OBJETOS

Ejemplo: 

```js
let pelicula = {
    titulo:'Jurassic Park',
    director: 'Steven Spielberg',
    reparto: [
        'Juan',
        'Oscar'
    ]
}

```

Este objeto es como el diccionario de Python. Es un elemento compuesto por por pares atributo (variable) valor. Un atributo puede tener como valor también un array. 

Al final, esto no deja de ser una array en esencia y por lo tanto, se le pueden aplicar todos los métodos y propiedades de las listas. 

Para acceder individualmente, se tiene que poner el objeto seguido de un punto (.) y de su atributo.

```js

console.log(pelicula.titulo)

```

Se pueden también meter objetos dentro de objetos y para acceder a ellos hay que poner un punto extra seguido del nuevo atributo. 

```js

let pelicula = {
    titulo:'Jurassic Park',
    director: {
        nombre:'Steven',
        apellido: 'Spielberg'
    },
    reparto: [
        'Juan',
        'Oscar'
    ]
}

console.log(pelicula.director.nombre)

```

Cuando una función se define como valor de un atributo dentro de un objeto, se llama Método. 

```js

let pelicula = {
    titulo:'Jurassic Park',
    saludo: function(){
        //Esto es un Método. 
    },
    director: {
        nombre:'Steven',
        apellido: 'Spielberg'
    },
    reparto: [
        'Juan',
        'Oscar'
    ]
}

console.log(pelicula.titulo)

```

Los objetos no son conscientes de que los valores de las variables que tienen. Cuando nosotros creamos un objeto el concepto This, (como el self en python), es cuando se da cuenta de si mismo. 

## CLASES

Las clases son plantillas o prototipos. Las variables de las clases se tienen que comenzar con Mayúscula. Las clases son representaciones de las ideas que podemos utilizar para crear objetos del mundo cotidiano. En realidad, una clase es un constructor de objetos. En la plantilla para crear objetos sin miedo a que cometamos typos. 

```js

class Pelicula{
    constructor (titulo, director, fecha){
        this.titulo = titulo;
        this.director = director;
        this.fecha = fecha;
    }

```
Dentro del constructor van todos los elementos que luego serán llamados atributos. Se tienen que definir los atributos del objeto con this.attr = attr para que la clase sepa que tiene que utilizar para si misma los atributos que se dan. Es como linkar el parámetro del constructor a la instancia. Hay que hacer esto siempre que queramos que los atributos se vean fuera del objeto, pero podríamos no querer hacer esto. This va a ser el contexto que vaya a tener el objeto. 

Los atributos no tienen porque ser directos, también se pueden hacer condicionales y predefinirlos según otro atributo. Lo siguiente define un atributo condicional que depende de la información anterior para dar un valor u otro. No va por parámetro porque es condicional. 

```js

class Pelicula{
    constructor (titulo, director, fecha){
        this.titulo = titulo;
        this.director = director;
        this.fecha = fecha;
        
        if (this.fecha < 1980){
            this.color = "B/N"
        }else{
            this.color = "Color"
        }
    }
```

También se pueden crear instancias vacías y decidir que no entren por parámetro. 

```js

this.reparto = [];

```

Fuera del construstor y dentro de la clase van los métodos. Los métodos son funciones que utilizan los valores de los atributos de la clase para dar resultados. 

```js
getAnosCartelera(){
        const hoy = new Date();
        const year = hoy.getFullYear();

        return year - this.fecha;//Ahora todos los objetos de las clases pueden usar este método. La definición de la función es como la anterior, no como en el objeto. 
    }
```

Con la clase creada, ahora se pueden crear instancias del objeto (objetos individuales)

```js

const pelicula_1 = new Pelicula('Toy Story', 'Pixar', 1990);


```

Volviendo a la lista vacía, con un método podemos añadir actores al reparto. Supongo que si lo hicieramos por parámetro en el constructor, no haría falta esto pero habría que rellenarlo. 

```js

addActor( actor ){

        this.reparto.push (actor); 
}

```

Imaginemos que para los actores, necesitamos crear un subobjeto. tiene propiedades y de igual manera se podría parametrizar una clase hija para no tener que crear por parámetro o método todo esto. 

```js

class Actor{
    constructor( nombre, apellidos, fechaNacimiento, retirado) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fechaNacimiento = fechaNacimiento;
        this.retirado = retirado;
    }
}


```
