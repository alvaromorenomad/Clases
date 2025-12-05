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
Un trozo de código que se repite un número **DETERMINADO** de veces

1. Primera versión de for


```js
for( let i = 0; i<10 ; i++ ){
    console.log('Hola: ', i);
}
```



