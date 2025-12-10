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


## Pintar en la web

Primero seleccionar un nodo



SUSTITUYE todo lo que hay
```js

let nodoContenedorMain = document.querySelector( '#contenedor_main' );
nodoContenedorMain.innerHTML = '<h1>Nuevo Código añadido por JS</h1>';

```

Para mantener el contenido
```js
contenedor_main.innerHTML = contenedor_main.innerHTML + '<h1 class="destacado" >Nuevo Código añadido por JS</h1>'
// Equivalente
contenedor_main.innerHTML +=  '<h1 class="destacado" >Nuevo Código añadido por JS</h1>'

```



````js
console.log(contenedor_main);


````


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

## Añadir y quitar clases

```js
  const nodoCuadrado = document.querySelector( '#miCuadrado' )
    console.log( nodoCuadrado )

    // Añadir una clase a cualquier NODO HTML INDIVIDUAL

    nodoCuadrado.classList.add( 'rotando' )
```



## For
Un trozo de código que se repite un número **DETERMINADO** de veces-

1. Primera versión de for


```js
for( let i = 0; i<10 ; i++ ){
    console.log('Hola: ', i);
}
```

## Acceder a valores de input

```js
const nodoInputNumero = document.querySelector ('#entradaNumero')
console.log(nodoInputNumero);
const valorInput = nodoInputNumero.value; //String
console.log(nodoinputnumero.valueAsNumber); //Para transformar a Number, normalmente el programa te lo hace, pero mejor usar esto o Number para transformar el tipo a Number. 
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



