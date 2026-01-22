'use strict'

import { AppTareas } from "./modules/AppTareas.js";
import { Tarea } from "./modules/tarea.js";

//esto es un archivo director, donde se importan los módulos pequeños

/* import { Persona, Empleado } from './modules/persona.js'

const persona_1 = new Persona('Alvaro','Moreno',1996);

console.log(persona_1);

const empleado_1 = new Empleado ('Paula', 'Cortes', 1996, 556444654)

console.log(empleado_1);
 */


//input para crear tareas
//Las tareas tienen que tener un estado -> /TODO / DOING / DONE / ARCHIVE

//Cuando creo una tarea, la creo con un estado TODO
//Tener un botón para pasar de estado
//Borrar la tarea
//Acceder a todas las tareas

/**
 * Necesito una entidad AppTareas
 * - Estado de las tareas
 * - Necesito saber que tareas tengo en cada estado
 *  - Añadir nuevas tareas
 *  - Necesito eliminar tareas
 *  - Avanzar tareas 
 * Necesito una entidad Tareas
 *  - identificador
 *  - Estado
 *  - titulo
 *  - responsable
 *  - fecha
 * 
 * 
 * 
 * 
 * 
 */

const tarea = new Tarea ('Estudiar', 'Alvaro', '21/01/2026');
console.log(tarea)

const app = new AppTareas( );

app.addTarea(tarea);

const tarea1 = new Tarea ('Actividad', 'Alvaro', '22/01/2026');

app.addTarea(tarea1);
tarea1.avanzarEstado();
tarea1.avanzarEstado();

console.log(app)

const all_task = app.getAllTareas();
console.log(all_task)

const tareasCompletadas = app.getTareasCompletas();
console.log(tareasCompletadas);

const nodoBtnTarea = document.getElementById('btnAdd');

nodoBtnTarea.addEventListener('click',function(){
    const nodoInput = document.getElementById('task');
    const valorInput = nodoInput.value;
    
    app.addTarea(valorInput, 'Maria', '19/12/2026');

    
})