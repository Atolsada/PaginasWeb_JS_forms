export class Form {
    constructor() {
        this.domForm = document.querySelector('form')
        this.data = {
            opciones : {
                conditions: '',
                turn: '',
                curse: ''
            },
            user : { 
                name: '', 
                f_name: ''},
            email: '',
            passw : '',
            coments : ''
        }
        this.domForm.addEventListener('submit',
            this.enviar.bind(this)
        ) 
    }

    enviar(oEv) {
        oEv.preventDefault()
         this.data.user.name = document.querySelector('#nombre').value
        //this.data.user.name = this.domForm.elements.nombre.value <--- A traves de elements para acceder a los elementos del formulario
        this.data.user.f_name = document.querySelector('#apellido').value
        this.data.email = document.querySelector('#correo').value
        this.data.passw = document.querySelector('#passw').value
        this.data.coments = document.querySelector('#comentarios').value
        this.data.opciones.conditions
        this.data.opciones.turn = this.verTurno()
        this.data.opciones.curse
        console.log(this.data)
        //console.dir(this.domForm)
        console.dir(document.querySelector('#condiciones').value)
    }
    verTurno(){
        //Ambas nos devuelven un array de datos <---
        // let aTurnos = document.getElementsByName('turno')
        let aTurnos = document.querySelectorAll('[name="turno"]')
         for (let i = 0; i < aTurnos.length; i++) {
            const item = aTurnos[i]; //item en cada vuelta es mañana 0, tarde 1, noche 2. Es un iterador
            if(item.checked){
                return item.value
            } 
        
        //let r = ''  <--- lo malo de este modo es que da vueltas hasta el final aunque el checked sea la primera
        //aTurnos.forEach(     <--Forma moderna en vez de usar for
        //aTurnos.some( <-- some en vez de forEach para que no te la vuelta entera
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
    }

     enviar(oEv) {
        oEv.preventDefault()
        //Dos formas de recoger los datos <----
        this.data.user = this.domUser.value
        this.dara.passw = document.querySelector('#apassw').value //<--- Tambien se puede poner asi ( la otra forma la de this.data.user)
        console.dir(this.data)
    }
} 