function main() {

    function promesas () {
        return new Promise(
            (resolve) => { //resolve puede mandar true y ademas DOMSettableTokenList(la frase)
                setTimeout(() => resolve('Ha pasado un ratejo'), 3000)}
        )   
    }

    function pintar(msg) {
        console.log(msg)
    }
    
    promesas()
    .then( pintar('Ha pasado un rato')
    )
    console.log('Ultima linea')
}

document.addEventListener('DOMContentLoaded', main)