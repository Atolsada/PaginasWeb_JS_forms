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

export class Main {
    constructor() {
        console.log("Iniciado JS, clase Main")
    }
} 

//Combertimos un fichero a modulo? como tal ya es un modulo un fichero pero lo normal es poner export al inicio
//Despues habra que importarlo donde queramos, al poner solo export lo hacemos exportable pero nada mas