// Concepto de clases
// se guardan normalmente con un archivo con mismo nombre de lo que guarda

//Como es clase empieza con mayuscula


// Forma tradicional constructora de objetos
// Igual que poner: function Main(nombre){
//    this nombre = nombre
//}

// se hace constructora una funcion cuando le ponemos let algo new algo2
// o cuando le ponemos new por delante


/* export class Main {
    constructor(name){
        this.name = name
    }
} */

export class Form {
    constructor() {
        
        this.inpNombre = document.querySelector('#nombre')
        this.btnEnviar = document.querySelector('#btnEnviar')
        this.btnBorrar = document.querySelector('#btnBorrar')
        this.output = document.querySelector('#output')
        console.dir(this)
        this.btnEnviar.addEventListener('click',
            this.enviar.bind(this)) //SIEMPRE QUE UNA FUNCION MANEJADORA DE EVENTOS TIENE THIS, SE PONE BIND 
        this.btnBorrar.addEventListener('click',
            this.Borrar.bind(this))
        //document.querySelector('#nombre') querySelector espera algo de css
        //document.querySelector('#btnEnviar')
    }
    enviar(){
        const nombre = this.inpNombre.value
        this.output.innerHTML = `Hola ${nombre}`
    }
    borrar(){
        this.inpNombre.value = ''
        this.output.innerHTML = ''
    }
} 

//Combertimos un fichero a modulo? como tal ya es un modulo un fichero pero lo normal es poner export al inicio
//Despues habra que importarlo donde queramos, al poner solo export lo hacemos exportable pero nada mas