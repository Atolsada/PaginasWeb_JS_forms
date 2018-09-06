/* function main(){
    let input = document.querySelector('#nombre')

    input.addEventListener('change', ()=> {
        console.log(input.value)
    })
} */

function main() {
    let input = document.querySelector('#nombre')

    input.addEventListener('change', ()=> {
        console.log("Evento Change:", input.value)
    })
    input.addEventListener('input', ()=> {
        console.log("Evento Input:", input.value)
    })
}

/* En consola
Evento Input: P
Evento Input: Pe
Evento Input: Pep
Evento Input: Pepe
Evento Change: Pepe */

document.addEventListener('DOMContentLoaded', main)