function main () {
    form = document.querySelector('form')
    inDni = document.querySelector('#dni')  
    btnEnviar = document.querySelector('#btnEnviar')

    inDni.setCustomValidity('DNI Incorrecto') //setCustomValidity aquí por que en html no existe como atributo

    form.addEventListener('submit', enviar)
    btnEnviar.addEventListener('input', validaDNI)

    function enviar(oE){ //objetoEvento

        //TO DO:Codigo real de envio
        oE.preventDefault() //Para mostrarnos en consola si envía(pero no envia es simulacion por si funciona)
        console.log('Enviando')
    }
        
    function validaDNI() {
        console.log('Validando DNI')
        const LETRAS = 'TRWAGMYFPDXBNJZSQVHLCKET'
        let num = inDni.value.substring(0, inDni.value.length-1)
        let letra =  inDni.value.substring(inDni.value.length-1)

        if (isNaN(num *1) || num < 1 || num > 99999999 ) {
            return 'Error'
        } else if(LETRAS[num%23] !== letra) {
            return 'Error'
        }
 
            //inDni.setCustomValidity('')
    }
    
    /* function letraDNI(num, letra) {
        const LETRAS = 'TRWAGMYFPDXBNJZSQVHLCKET'
        
        return (LETRAS[num%23]=== letra) // es funcion boolean por estos parentesis, evalua el true o false correspondiente
    } */
}


document.addEventListener('DOMContentLoaded', main)