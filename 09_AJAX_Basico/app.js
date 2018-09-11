import { FILE } from './config.js'

function main () {
    document.querySelector('#btnDatos')
    .addEventListener('click', pedirDatos)
            
    function pedirDatos() {
        //console.log('Pidiendo datos')
        console.dir(FILE)
       
    
        let ajax = new XMLHttpRequest()
        console.dir(ajax)
    }
}

document.addEventListener('DOMContentLoaded', main)