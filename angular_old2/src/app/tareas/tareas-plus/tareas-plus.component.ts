import { Component, OnInit } from '@angular/core';
import {TareaModel, TareaIf} from '../../models/tarea.model'

@Component({
  selector: 'cas-tareas-plus',
  templateUrl: './tareas-plus.component.html',
  styleUrls: ['./tareas-plus.component.css']
})
export class TareasPlusComponent implements OnInit {

  titulo: string
  rutaGoogle: string
  //newTarea: TareaModel
  newTarea: TareaIf
  //tareaName: string

  constructor() { }

  ngOnInit() {
    this.titulo = 'Lista plus'
    this.rutaGoogle = 'http://www.google.es'
    //this.newTarea = new TareaModel('', false)
    this.newTarea = {nombre: '', isCompleted:true}
    
  }
  addTarea () {
    
    console.log('this.newTarea')
  }

}
