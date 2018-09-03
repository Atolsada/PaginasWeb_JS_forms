export class Interacivo {
    constructor() {
        this.inpNombre = document.querySelector('#nombre_i')
        this.output = document.querySelector('#output_i')

        this.inpNombre.addEventListener('input',
            this.escribir.bind(this))
    }
    escribir(){
        if (this.inpNombre.value){
            this.output.innerHTML = `Hola ${this.inpNombre.nodeValue}`
        } else {
            this.output.innerHTML = ''
        }
        
    }
}