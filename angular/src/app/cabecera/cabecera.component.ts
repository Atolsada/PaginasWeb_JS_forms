import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cas-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  titulo:string
  fw:string

  constructor() {
    this.fw = 'Angular'
    this.titulo = `Proyecto ${this.fw}`
   }

  ngOnInit() {  }

  /* saludar(){} */

}

/* 
let x = new CabeceraComponent()
x.constructor()
x.saludar() 
*/