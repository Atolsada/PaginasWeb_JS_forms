import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cas-aticulo',
  templateUrl: './aticulo.component.html',
  styleUrls: ['./aticulo.component.css']
})
export class AticuloComponent implements OnInit {
  @Input() autor:string
  @Input() titulo:string
  @Input() contenido:string

  constructor() { }

  ngOnInit() {
  }

}
