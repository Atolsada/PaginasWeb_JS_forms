function main() {

    function asincrono (callback) {
        setTimeout(() => { 
            const ms = 'Ha pasado un rato'
            callback(ms)
        },3000)
    }

    function pintar(msg) {
        console.log(msg)
    }
    
    
    asincrono(pintar)
    console.log('Ultima linea')
}

document.addEventListener('DOMContentLoaded', main)