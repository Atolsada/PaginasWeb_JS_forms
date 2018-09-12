function main() {

    function asincrono (callback) {
        setTimeout(callback,3000)
    }

    function pintar() {
        console.log('Ha pasado un rato')
    }
    
    asincrono(pintar)
    console.log('Ultima linea')
}

document.addEventListener('DOMContentLoaded', main)