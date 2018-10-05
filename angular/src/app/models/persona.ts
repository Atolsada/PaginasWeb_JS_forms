class Persona{
    public name: string
    constructor(name:string){
        this.name = name
    }
}


//La forma normal de definir parametros en TS
class PersonaMejor{
    constructor(public name:string){

    }
}