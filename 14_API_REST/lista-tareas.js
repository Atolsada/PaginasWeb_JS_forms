import { FetchService } from "./Fetch-service";

export class ListaTareas {
    constructor(){
        this.URL = "http://localhost:3000/tareas"
        this.aTareas = []
        this.getTareas()
    }
    getTareas(){
        new FetchService()
    }
}