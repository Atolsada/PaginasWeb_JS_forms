function main() {

    function promesas (callback) {
        return new Promise(
            (resolve) => {setTimeout(resolve,3000)}
        )
        
    }

    function pintar(msg) {
        console.log(msg)
    }
    
    promesas()
    
    //pintar('Ha pasado un rato')
    console.log('Ultima linea')
}

document.addEventListener('DOMContentLoaded', main)