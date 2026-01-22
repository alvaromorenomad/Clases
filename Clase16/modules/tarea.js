'use strict'

//En el constructor solo se ponen cosas que se necesiten del usuario, pero en los atributos se ponen todos lo que queramos. 

export class Tarea{
    constructor(titulo, responsable, fecha){
        const random = Math.trunc(Math.random() * 10000);

            
        this.id = Number(String(Date.now() + random));
        this.titulo = titulo;
        this.estado = 'To_Do'
        this.responsable = responsable;
        this.fecha = fecha;
    }

    avanzarEstado(){
        /* if(this.estado === 'To_Do'){
            this.estado = 'Doing'
        }else if (this.estado ==='Doing'){
            this.estado = 'DONE'
        }else{
            this.estado = 'ARCHIVE'
        }
 */
        switch (this.estado){
            case 'To_Do':
                this.estado = 'Doing';
                break;
            case 'Doing':
                this.estado = 'Done';
                break;
            default:
                this.estado = 'Archive';
        }
    }

    isHecha(){
        if(this.estado === 'Done'){
            return true;
        }else{
            return false;
        }
    }
}