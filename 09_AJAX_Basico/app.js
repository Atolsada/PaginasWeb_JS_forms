import { FILE } from './config.js'

function main () {
    document.querySelector('#btnDatos')
    .addEventListener('click', pedirDatos)
            
    /* document.querySelector('#btnDatos')
    .onclick = pedirDatos */

    function pedirDatos() {
        //console.log('Pidiendo datos')
        console.dir(FILE)
    
        let ajax = new XMLHttpRequest()
        console.dir(ajax)
        ajax.onreadystatechange = mostrarDatos

        //ajax.open() prepara la peticion(abre el canal de comunicaciones) get-post-put-delete
        //ajax.send() lanza la operacion
        ajax.open('GET', 'datos.json')
        ajax.send(null)

        function mostrarDatos(){
            console.log(ajax.readyState) //4

            if(ajax.readyState === 4){
                console.log(ajax.status) //200 bien 404 mal
                if(ajax.status === 200){
                    console.log(ajax.responseText) //responseText es un string por que ajax solo se envian strings
                    document.querySelector('#output')
                    .innerHTML = ajax.responseText
                } else {
                    document.querySelector('#output')
                    innerHTML = ajax.statusText + ' : ' +
                    ajax.statusText
                }

            }
        }

    }
}

document.addEventListener('DOMContentLoaded', main)