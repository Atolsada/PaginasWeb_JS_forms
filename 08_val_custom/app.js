function main () {
    form = document.querySelector('form')
    inDni = document.querySelector('#dni')  
    btnEnviar = document.querySelector('#btnEnviar')

    inDni.setCustomValidity('DNI Incorrecto') //setCustomValidity aquí por que en html no existe como atributo

    form.addEventListener('submit', enviar)
    btnEnviar.addEventListener('click', validaDNI)

    function enviar(oE){ //objetoEvento

        //TO DO:Codigo real de envio
        oE.preventDefault() //Para mostrarnos en consola si envía(pero no envia es simulacion por si funciona)
        console.log('Enviando')
    }
        
    function validaDNI() {
        console.log('Validando DNI')
        if (inDNI.value){
            inDni.setCustomValidity('')
        }

    }
    
}


document.addEventListener('DOMContentLoaded', main)