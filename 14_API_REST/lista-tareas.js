import { FetchService } from "./fetch-service.js";

export class ListaTareas {
    constructor() {
        this.uRL = 'http://localhost:3000/tareas'
        this.aTareas = []
        this.getTareas()
        this.nodoListaTareas = document.querySelector(lista)
    }

    getTareas() {
        new FetchService({url:this.uRL, method: 'GET' })
            .get()
            .then( data => {
                this.aTareas = data
                this.renderLista()
            })
    }
    
    renderLista() {
        let html = ''
        //console.dir(this.aTareas)

        this.aTareas.forEach( 
            item => 
                //html += `<li> ${item.name} </li>`
                new Tarea (item).renderTarea()
        )
        this.nodoListaTareas.innerHTML = html
    }
}