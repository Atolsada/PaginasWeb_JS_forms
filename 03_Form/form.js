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
            passw : ''
        }
        this.domForm.addEventListener('submit',
            this.enviar.bind(this.domForm.elements.nombre)
        ) 
    }

    enviar(oEv) {
        oEv.preventDefault()
        // this.data.user.name = document.querySelector('#nombre').value
        //this.data.user.name = this.domForm.elements.nombre.value <--- A traves de elements para acceder a los elementos del formulario
        // this.data.passw = document.querySelector('#passw').value
        // console.log(this.data)
        
    }
}


/*     enviar(oEv) {
        oEv.preventDefault()
        //Dos formas de recoger los datos <----
        this.data.user = this.domUser.value
        this.dara.passw = document.querySelector('#apassw').value //<--- Tambien se puede poner asi ( la otra forma la de this.data.user)
        console.dir(this.data)
    }
} */