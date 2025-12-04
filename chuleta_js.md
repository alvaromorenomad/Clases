# JAVASCRIPT

HTML es un lenguaje de marcados por lo que no se pueden crear flujos. No puede ir por un lado u otro según decidamos. JScript sigue puede hacer esto y por eso es un lenguaje de programación
// para hacer comentarios en JS de una sola línea
/* para comentarios en JS de bloque que tenga mucha más información y ocupe más. 

Java y JS no tienen nada que ver. Java es un lenguaje de servidor (backend) y no se va a tocar. Un lenguaje de programación es un conjunto de intruscciones ordenadas que define que debería decir a un programa donde actuar, cuando y cómo hacerlo. Todo se 

JavaScript es un lenguaje de tipado débil, es decir, el tipo de los elementos es mutable dependiendo de como actuemos con ello. 

Pseudocódigo es un diagrama previo a la programación donde se expone visualmente el problema que tenemos que solucionar. Un pseudocódigo bien ordenado nos organiza la estructura del código programado. 

console.log('hola mundo') pinta información en el navegador. Es como una especie de print de Python

function nombre_funcion ()

Define una función que luego se puede utilizar para activar un evento. El tipo de evento se define en el atributo html como <button onclick="escribe_por_consola()">pulsa</button> para que se ejecute cuando se pulse.

debugger permite detener la ejecución en puntos específicos (breakpoints), ver el valor de las variables en cada momento, inspeccionar el flujo de llamadas a funciones y modificar valores en tiempo real, lo que facilita mucho la localización de fallos en comparación con métodos como console.log()


console.clear borra la consola desde un punto dado. 



## Eventos

### 1. Atributo dentro de elemento HTML


```html
<button onclick="escribe_por_consola()">pulsa</button>
```

``` js
function escribe_por_consola(){
    console.log('Botón clicado');
}
```

# FOR

Un trozo de código que se repite un número DETERMINADO de vecez

1. Primera versión del FOR: 

```js
 for (let i = 3; i < 10; i++){
    console.log("Hola: ", i)
 }
```


