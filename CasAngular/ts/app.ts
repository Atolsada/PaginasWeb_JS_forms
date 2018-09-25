interface Direccion {
    calle : string
    poblacion : string
}
class Usuario {
    /* name: string
    lastName: string
    edad: number */

    /* constructor(name:string, lastName, edad){
        this.name = name
        this.lastName = lastName
        this.edad = edad */
        
        constructor(public name : string,
            public lastname : string,
            public edad : number,
            public direccion : Direccion
            /* public calle : string,
            public poblacion : string */){}
    
            saludar(){
                console.log('Hola')
                console.log(this)
            }
            crecer (){
                //this.edad = pEdad
                this.edad++
            }
}


let user1: Usuario = new Usuario('Pepe', 'Perez', 34, 
            {calle : 'Pez', poblacion : 'Teruel'})

user1.crecer()
user1.saludar()
