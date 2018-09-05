export class App {
    constructor() {
        this.dom = {
            formInicio : document.querySelector('#formInicio'),
            formFinal : document.querySelector('formFinal'),
            cboxMas : document.querySelector('#mas')
        }
    this.defineHandlers()
    }

    defineHandlers () {
        this.dom.cboxMas.addEventListener('change',
        this.setFormFinal.bind(this)) // bind(this) para que funcione en el this.dom.formFinal
    }

    setFormFinal () {
        //console.log('Cambio') <--- vemos el "Cambio" de que funciona el checkbox en la consola
        this.dom.formFinal.classList.toggle('hide')
    }
}