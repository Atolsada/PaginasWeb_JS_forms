// JS es un lenguaje orientado a eventos

// funcion manejadora de eventos clave (ejem)- esperar a que se termine de cargar todo antes de iniciar los eventos

/* function iniciar(){
    console.log("Iniciado JS")
} */

// Funcion con nombre
//document.addEventListener('DOMContentLoaded', iniciar)

// Si ponemos sólo
//iniciar() <---Lo mismo que arriba pero la invocamos nosotros y no el explorador/sistema con addEventListener

// Funcion anónima
//document.addEventListener('DOMContentLoaded', function () {
//    console.log("Iniciado JS, función anónima")
//})

// Funcion arrow
/* document.addEventListener('DOMContentLoaded', () =>
    console.log("Iniciado JS, función anónima")
) */

// Funcion más purista (se invoca a si misma) en cualquier formato: anonima, arrow, nombre
//(() => 
//    document.addEventListener('DOMContentLoaded',  () => 
//        console.log("Iniciado JS, función anónima")
//    ) 
//)()

//Uncaught SyntaxError: Unexpected token {      app.js:33


//Igual que arriba (son anonimas) pero arriba es mas compacta
//document.addEventListener('DOMContentLoaded', 
//   function () {new Form()
//   })


/*  function iniciar() {
    console.log("Iniciado JS")
 }
 
 document.addEventListener('DOMContentLoaded', iniciar) */
 

/*  document.addEventListener('DOMContentLoaded', function () {
    console.log("Iniciado JS, función anónima")
 }) */

/*  document.addEventListener('DOMContentLoaded',  () => 
    console.log("Iniciado JS, función anónima")
 ) */


/////////////////////////////


 import { Form } from './form.js' 
 import { Interactivo } from './interactivo.js'
 
 /* document.addEventListener('DOMContentLoaded',
                         function () {
                               new Main()
                         }
 )  */
 
 document.addEventListener('DOMContentLoaded', () => {
     new Form()
     new Interactivo()
 }) 
  
 class Persona {
     constructor (name, edad, profesion) {
         this.name = name
         this.edad = edad
         this.profesion = profesion
     }
     saludar() {}
 }
 
 