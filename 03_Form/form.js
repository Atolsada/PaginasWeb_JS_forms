export class Form {
    constructor() {
         document.querySelector('form').addEventListener('submit',
        function (oEv) {
            oEv.preventDefault()
            console.log('Evento submit')
        }
    ) 
    }
}