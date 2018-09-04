import { FormularioModel} from './model.js'
export class FormInscripcion {
    constructor() {
        this.domForm = document.querySelector('form')
        this.data = new FormularioModel()
        this.domForm.addEventListener('submit',
            this.enviar.bind(this)
        ) 
        console.log(this.data)
    }
    
    enviar(oEv) {
        oEv.preventDefault()
        this.data.user.name = document.querySelector('#nombre').value
        //this.data.user.name = this.domForm.elements.nombre.value
        this.data.user.f_name = document.querySelector('#apellido').value
        this.data.email = document.querySelector('#correo').value
        this.data.passw = document.querySelector('#passw').value
        this.data.coments = document.querySelector('#comentarios').value
        this.data.opciones.conditions = document.querySelector('#condiciones').checked
        this.data.opciones.turn = this.setRadio('turno')
        this.data.opciones.curse = this.setCurso() 
        this.data.aficiones = this.setAficiones()
        console.log(this.data)
        //console.dir(this.domForm)
        
    }

    /* Procesa un radioButton */
    // La hacemos funcion helper

    setRadio(name) {
        // let aTurnos = document.getElementsByName('turno')

        //let id = '[name=' + name + ']'
        const id = `[name='${name}']`
        const aRadio = document.querySelectorAll(id)
        for (let i = 0; i < aRadio.length; i++) {
            const item = aRadio[i];
            if (item.checked) {
                return item.value
            }
        }
        
        /* let r = ''

        let aDatos = []
        aTurnos.forEach(
            item => aDatos.push(item)
        )
        aDatos.some(    
            (item, i) => {
                console.log("Vuelta", i+1)
                if (item.checked) {
                    r = item.value
                    return true
                }
            })
        return r */
    }

     /* enviar(oEv) {
        oEv.preventDefault()
        //Dos formas de recoger los datos <----
        this.data.user = this.domUser.value
        this.dara.passw = document.querySelector('#apassw').value //<--- Tambien se puede poner asi ( la otra forma la de this.data.user)
        console.dir(this.data)
    } */

    setCurso() {
        const curso = document.querySelector('#curso')
        console.dir(curso.selectedIndex)
        console.dir(curso[curso.selectedIndex])
        const oDato = {
            value :  curso[curso.selectedIndex].value,
            text :  curso[curso.selectedIndex].textContent
        }
        return oDato
    }

    setAficiones() {
        let aDatos = []
        let aAficiones = document.querySelectorAll('.aficiones')
        aAficiones.forEach( item => {
            if (item.checked) {
                aDatos.push(item.id)
            }
        })
        return aDatos
    }
}