function main() {

    let validForm = true
    let inNombre = document.querySelector('#nombre')
    let inApellido = document.querySelector('#apellido')
    let btnEnviar = document.querySelector('#enviar')
    let formForm1 = document.querySelector('#form1')

    btnEnviar.addEventListener('click', preEnviar)  //evento click por que es un boton 
    formForm1.addEventListener('submit', enviar)
    inNombre.addEventListener('input', validaNombre)

    function preEnviar () {
        console.log("Pulsado click")
        console.dir(formForm1)
    }

    function validaNombre() {
        let validControl = true
        if (!inNombre.checkValidity()) {
            inNombre.nextElementSibling.innerHTML = 
                '<span class="h4">El nombre es imprescindible</span>' /* es correcto semanticamente con bootstrap */
                //inNombre.validationMessage
            validControl = false
        } else {
            inNombre.nextElementSibling.innerHTML = ''
            validControl = true
        }
        return validControl //se pone return para que la funcion que es void se haga boolean ya que al validar es true o false
    }

    function enviar(oEv) {
        
        if(!validaNombre()) {
            console.log("No valido") 
             oEv.preventDefault()//Para que se vea por consola sin que se envie
            //console.log()
            //console.log(inNombre.validity)
            //console.log(inNombre.validationMessage)
        } else {
            // Esto sobraria para enviar realmente
            oEv.preventDefault()
            console.log("Enviando")
        }
    }
}

document.addEventListener('DOMContentLoaded', main)



/*
    - DE MOMENTO LO DEJAMOS EN COMENTARIO POR QUE LO HACEMOS DE NUEVO -
    function validaTexto() {
    if(!this.value) {
        console.log(`${this.id} incorrecto`)
        console.dir(this)
        this.nextElementSibling.innerHTML = `${this.id} incorrecto`
    } else {
        this.nextElementSibling.innerHTML = ''
        validaFormulario()
    }
}
function validaFormulario () {
    if (inNombre.value && inApellido.value) {
        btnEnviar.disabled = false
    }
}
} 



document.addEventListener('DOMContentLoaded', main)
*/