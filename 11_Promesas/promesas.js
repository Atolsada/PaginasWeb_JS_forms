function main() {

    function promesas() { //<--- Este es el burguer (new promise, el NEW instancia)
        return new Promise( //<--- Este es el ticket de compra de la hamburguesa (suele encontrarse en las primeras lineas)
            (resolve) => {
                setTimeout (() => resolve('Ha pasado un rato'), 3000) //<--- Lo que tarda en hacerse la hamburguesa ('la hamburguesa')
            }
        )
    }


    /* EJEMPLO POR SI NO QUEDA CLARO */

    function promesa2() { //return new Promise( (resolve, reject) => {}) funciones - resolve resuelve, reject por si algo salio mal
        return new Promise( (resolve, reject) => {
            //TO DO
            setTimeout ( ()=>{
                // TO DO
                let comida = 'comida preparada'
                if (comida) {
                    resolve(comida) //<--- avisa a la persona y va a dar la comida
                }else{
                    reject('Error')
                }

                
            }, 3000)
        })

    }

    
    /* function pintar(msg) {
        console.log(msg)
    }
    
    promesas()
    .then(pintar */

    promesas().then( //<--- Es el señor que te atiende en el burguer 
        (response) => { console.log(response)}
    )

     console.log('Ultima linea')


}

document.addEventListener('DOMContentLoaded', main)