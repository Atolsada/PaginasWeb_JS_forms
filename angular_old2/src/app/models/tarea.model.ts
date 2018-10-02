export class TareaModel {
    constructor(
        public nombre: string,
        public isCompleted: boolean
    ){}
}

export interface TareaIf {
    nombre: string
    isCompleted: boolean
}