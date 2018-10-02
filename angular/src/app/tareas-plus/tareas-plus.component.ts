import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cas-tareas-plus',
  templateUrl: './tareas-plus.component.html',
  styleUrls: ['./tareas-plus.component.css']
})
export class TareasPlusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.titulo = 'Lista tareas'
    this.rutaGoogle = 'www.google.es'
    this.newTarea = {nombre:'', isCompleted: false}
    this.aTareas = []
  }

  addTarea(){
    let oDatos = JSON.parse(JSON.stringify(this.newTarea))
    
    this.aTareas.push(this.newTarea)
    console.log(this.aTareas)
    this.newTarea.nombre = ''
  }
}
