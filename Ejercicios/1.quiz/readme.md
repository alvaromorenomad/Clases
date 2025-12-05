
# Quiz

El quiz es un ejercicio académico en el que se va a pedir el nombre del usuario.
Después se le va a hacer 3 preguntas al usuario. Las tres preguntas son las que elija el usuario.

Las preguntas se van a realizar mediante prompt.

Todas las preguntas deben comenzar con el nombre introducido por el usuario. Por ejemplo:

```
"Luis, ¿Cuál es la capital de Italia?"
```

Al usuarion **solo se le hace la siguiente pregunta si acierta la anterior**

1. Pedir el nombre del usuario con un prompt
2. Hacer la primera pregunta. Si el usuario acierta entonces se hace la segunda pregunta.
3. Si el usuario no acierta, entonces hay que pintar en la web y no se hacen más preguntas
    ````
    "Luis, tienes que estudiar más"
    ````
4. Si el usuario pasa a la segunda pregunta y acierta se le hace la tercera; si falla se escribe en la web, y no se hacen más preguntas 
    ```
    "Luis fallaste, ¡vuelve a intentarlo!"
    ```
5. Si el usuario pasa a la tercera pregunta y acierta, se escribe en la web 
    ```
    "Felicidades Luis, todas las respuestas son correctas".
    ```


## Mejoras

1. Que el quiz empiece mediante un botón START
2. AVANZADO: Medir el tiempo que ha pasado desde que ha empezado. Buscar en internet cómo "medir tiempos en JS"




