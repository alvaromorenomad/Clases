'use strict'

export class Persona{
    constructor(nombre,apellido,fecha){
        this.nombre = nombre;
        this.apellido = apellido;
        this.nacimiento = fecha;
    }

    getFecha (){
        const hoy = new Date();
        const edad = hoy.getFullYear() - this.nacimiento; 
        return edad;
    }
}

export class Empleado extends Persona{
    constructor(nombre,apellidos,fecha,numSeguridad){
        //Super invoca el constructor de persona.
        super(nombre, apellidos, fecha);
        this.numSeguridad = numSeguridad;
    }
}