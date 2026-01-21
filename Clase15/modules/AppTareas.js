'use strict';

export class AppTareas{
    constructor(){
        //ESTADO
        this.tareas = [];
    }

    addTarea( parametroTarea){
        this.tareas.push( parametroTarea)
    }

    getAllTareas(){
        return this.tareas;
    }

    getTareasCompletas(){
        const tareasCompletadas = this.tareas.filter( (cadaTarea) => {
            if(cadaTarea.isHecha() ){
                
            }
        })
    }
}