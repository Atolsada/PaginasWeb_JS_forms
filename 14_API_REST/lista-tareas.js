import { FetchService } from "./fetch-service.js";
import {  MENSAJES } from "./mensajes.js"

export class ListaTareas {
    constructor() {
        this.nodoListaTareas = document.querySelector('#lista')
        this.nodoBtnAdd = document.querySelector('#btnAdd')
        this.nodoNewTarea = document.querySelector('#inTarea')
        this.nodoBtnBorrarSelect = document.querySelector('#btn-borrar-select')
        this.nodoBtnAdd.addEventListener('click', this.addTarea.bind(this))
        this.nodoBtnBorrarSelect.addEventListener('click', this.borrarSelect.bind(this))
        this.uRL = 'http://localhost:3000/tareas'
        this.aTareas = []
        this.fetchService = new FetchService()
        this.getTareas()
    }

    getTareas() {
        this.fetchService.send(this.uRL, {method: 'GET' })
            .then( data => {
                this.aTareas = data
                
                /* console.dir(this.aTareas)
                this.aTareas = this.aTareas.filter(
                    (item) => {
                        console.log(item.name.indexOf('Aprender')) 
                        if (item.name.indexOf('Aprender') >= 0 ) { return true} 
                        else { return false }
                    }
                )
                console.dir(this.aTareas) */
                console.log("Ejecutando getTareas")
                this.renderLista()
            },
            error => {console.dir(error)}
            )
    }
    
    renderLista() {
        this.nodoListaTareas.innerHTML = ''
        let html = ''
        this.nodoBtnBorrarSelect.disable = true

        this.aTareas.forEach(
            item => {
                if (item.isComplete && this.nodoBtnBorrarSelect.disable)
                    {this.nodoBtnBorrarSelect.disable = false
                    } 
                html += this.renderTarea(item)}
        )
        this.nodoListaTareas.innerHTML = html
        this.aNodosChecks = document.querySelectorAll('[name="is-completa"]')
        this.aNodosBorrar = document.querySelectorAll('.borrar-activo')
        this.aNodosChecks.forEach(
            item => item.addEventListener('change', this.checkTarea.bind(this))
        )
        this.aNodosBorrar.forEach(
            item => item.addEventListener('click', this.borrarTarea.bind(this))
        )
    }

    renderTarea(data) {
        let htmlView =  `
            <li>
            <input type="checkbox" name="is-completa" id="check-${data.id}"
                data-id="${data.id}" ${data.isComplete ? 'checked' : '' }>
            <span class="nombre-tarea ${data.isComplete ? 'hecho' : '' }">
            ${data.name}</span>
            <span id="borrar-${data.id}" data-id="${data.id}"
                class="borrar-tarea ${data.isComplete ? 'borrar-activo' : 'inactivo' }">🗑️</span>
            </li>
        `
        return htmlView
    }

    addTarea() {
        if (!this.nodoNewTarea.value) {return}
        let newTarea = {
            name: this.nodoNewTarea.value,
            isComplete: false
        }
        this.nodoNewTarea.value = ''
        let headers = new Headers()
        headers.append("Content-Type", "application/json");
        this.fetchService.send(this.uRL, {
            method: 'POST', 
            headers : headers,
            body: JSON.stringify(newTarea)
        }).then(
            response => {
                console.log(response)

                this.getTareas()
            },
            error => console.log(error)
        )





    }

    checkTarea(oEv) {
        console.log(oEv.target.dataset.id)
        console.log(oEv.target.checked)
        let datos = {
            isComplete : oEv.target.checked
        }
        let url = this.uRL + '/' + oEv.target.dataset.id
        let headers = new Headers()
        headers.append("Content-Type", "application/json");
        console.dir(headers)
        this.fetchService.send(url, {
                method: 'PATCH', 
                headers : headers,
                body: JSON.stringify(datos)
            }).then( // () => this.getTareas()
                    response => {
                    console.log(response)
                    this.getTareas()
                },
                error => console.log(error)
            )
    }

    borrarTarea(p) {
        let id
        if (p.target) {
            id = p.target.dataset.id
            if (!window.confirm( MENSAJES.listaTareas.confirmacion)) {return}
        }
        else { 
            id =  p
        }
        console.log(id)
        return
        // TO DO Borrar en Servicio Web
        let url = this.uRL + '/' + id
        this.fetchService.send(url, {method: 'DELETE' })
            .then(
                data => { 
                    console.log(data)
                    if (p.target || p.isUltima){
                        this.getTareas()
                    }
                    this.getTareas() 
                },
                error => console.log(error)
            )
    }
 
    /* borrarSelect(){
        console.log("Borrando")
        aSeleccionados = this.aTareas.map( //este map se esta usandocomo filtro de elegir solo los completados
            (item)=> {if (item.isComplete) return item.id}) //map se ejecuta 1 por item y se guarda en aSeleccionados
    } */
    borrarSelect() {
        let aSelecionados = this.aTareas.filter(
            (item)=>{item.isComplete}
        )
        if(aSelecionados.length) {return}


        if (!window.confirm( MENSAJES.listaTareas.confirmacion)) {return}
        this.aTareas.forEach(
            (item) => {
                let isUltima = true

                if (item.isComplete) { 
                    // TODO fetch DELETE para item.id} 
                    this.borrarTarea({id:item.id, isUltima : isUltima})
                } 
            }
        )
        //console.log(aSelecionados)
        aSeleccionados.forEach(
            (item, i, array) => {
                let isUltima = (i+1 === array.lenght) ? true : false
                this.borrarTarea( {id: item.id, isUltima : isUltima} )
            }
        )
    }
}