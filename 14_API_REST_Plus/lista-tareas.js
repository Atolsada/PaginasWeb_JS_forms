import { FetchService } from "./fetch-service.js";
import { Tarea } from "./tarea.js";

export class ListaTareas {
    constructor() {
        this.uRL = 'http://localhost:3000/tareas'
        this.aTareas = []
        this.nodoListaTareas = document.querySelector('#lista')
        this.fetchService = new FetchService()
        this.getTareas()
    }

    getTareas() {
        this.fetchService.send(this.uRL, {method: 'GET' })
            .then( data => {
                this.aTareas = data
                console.log("Ejecutando getTareas")   
                this.renderLista()
            },
            error => {console.dir(error)}
            )
    }
    
    renderLista() {
        this.aTareas.forEach( 
            item => {
             this.nodoListaTareas.appendChild(new Tarea(item).getTarea())   
             //this.nodoListaTareas.appendChild(new Tarea(item).nodoTarea )   
            }
        )
    }
}
