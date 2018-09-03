export class Form {
    constructor() {
        this.domForm = document.querySelector('form')
        this.domUser = document.querySelector('#user')
        this.data = {
            user = '',
            passw = ''
        }
        this.domForm.addEventListener('submit',
            this.enviar.bind(this)
        ) 
    }
    enviar(oEv) {
        oEv.preventDefault()
        this.data.user = this.domUser.value
        this.dara.passw = document.querySelector('#apassw').value //<--- Tambien se puede poner asi
        console.dir(this.data)
    }
}