import{Form} from'./form.js'

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').addEventListener('submit',
        function (oEv) {
            oEv.preventDefault() //<--- Para que no envie
            console.log('Evento submit')}
    )
    /* document.querySelector('button').addEventListener('click',
        function () {console.log('Evento click')}
    ) 
    Para que veamos que con click se puede hacer
    */
})