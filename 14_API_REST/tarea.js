export class Tarea {

    constructor(data) {
        this.name = data.name
        this.isComplete = data.isComplete

        this.nodoTarea = ''
        this.crearTarea()

        //this.nodoCheck = document.querySelector('#isCompleta')
        //this.nodoBorrar = document.querySelector('#btnBorrar')

        this.nodoCheck = this.nodoTarea.querySelector('#isCompleta')
        this.nodoBorrar = this.nodoTarea.querySelector('#btnBorrar')

        console.log(this.nodoCheck, this.nodoBorrar)
    }

    crearTarea(){
        this.nodoTarea = document.createElement('li')
        //console.dir(tarea)
        this.nodoTarea.innerHTML=`
            <input type="checkbox" name="isCompleta" id="isCompleta"
                ${this.isComplete ? 'checked' : '' }>
            <span class="nombreTarea">${this.name}</span>
            <span id="btnBorrar" class="borrarTarea">🗑️</span>
        `
        console.dir(this.nodoTarea)
    }

    renderTarea() {
        //let htmlView =  `
        //    <li>
        //    <input type="checkbox" name="isCompleta" id="isCompleta"
        //        ${this.isComplete ? 'checked' : '' }>
        //    <span class="nombreTarea">${this.name}</span>
        //    <span id="btnBorrar"class="borrarTarea">🗑️</span>
        //    </li>
        //` 
        //return htmlView
    }
}