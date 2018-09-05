import { GENEROS } from './datos.js'
export class App {
    constructor() {
        this.dom = {
            formInicio : document.querySelector('#formInicio'),
            formFinal : document.querySelector('#formFinal'),
            cbMas : document.querySelector('#mas'),
            slGenero : document.querySelector('#genero'),
            slAutores : document.querySelector('#autor'),
            btnEnviar : document.querySelector('#btnEnviar'),
            /* btnraro : document.querySelector('#btnraro') */
        }
        this.aGeneros = GENEROS
        this.generosFirst = true
        this.defineHandlers()
        this.crearSelect(this.aGeneros, this.dom.slGenero)
    }

    defineHandlers () {
        this.dom.cbMas.addEventListener('change',
            this.setFormFinal.bind(this)) // bind(this) para que funcione en el this.dom.formFinal
        this.dom.slGenero.addEventListener('change',
            this.changeGenero.bind(this))
        this.dom.formFinal.addEventListener('submit',
            this.enviar.bind(this))
        /* this.dom.btnraro.addEventListener('click',
            this.enviarRaro.bind(this)) */
}

    setFormFinal () {
        //console.log('Cambio') <--- vemos el "Cambio" de que funciona el checkbox en la consola
        this.dom.formFinal.classList.toggle('hide')
    }

        /* const aGeneros = [
            {value:'', label: ''},
            {value:'P', label: 'Policiaco'},
            {value:'SF', label: 'Ciencia Ficcion'},
            {value:'F', label: 'Fantasia'}
        ]
 */
    crearSelect(aDatos, target, selected) {
        let html = ''
        aDatos.forEach( (item, i) => {
            if( i === selected) {

            } else {
                html += `<option value="${item.value}"selected>
                        ${item.label}</option>`  
            }
        })
        target.innerHTML =  html
    }

        /*this.dom.sGenero.innerHTML =
            `<option value="P">Policiaco</option>
            <option value="SF">Ciencia Ficcion</option>
            <option value="F">Fantasia</option>` */

    changeGenero() {
        let i = this.dom.slGenero.selectedIndex
        console.log( 'Seleccionado', i )
        if (this.generosFirst) {
            this.aGeneros.shift()
            this.crearSelect(this.aGeneros, this.dom.slGenero, i-1)
            this.generosFirst = false
            this.dom.btnEnviar.disabled = false
        }
        i = this.dom.slGenero.selectedIndex
        console.dir( i )
        console.dir( this.dom.slGenero[i])
        console.log(this.aGeneros[i].autores)
        this.dom.slAutores.disabled = false
        this.crearSelect(this.aGeneros[i].autores, this.dom.slAutores)
    }
        
    enviar(oEv) {
        //oEv.preventDefault()
        const data = '?genero=' + 
        this.dom.slGenero[this.dom.slGenero.selectedIndex].value
        + '&autor=' +
        this.dom.slAutores[this.dom.slAutores.selectedIndex].value
        console.log(data)
    }

    /* enviarRaro(){
        this.dom.formFinal.submit()
    } */
}

        
        

