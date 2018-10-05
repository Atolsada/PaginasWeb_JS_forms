import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cas-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  empresa: string
  cliente: string

  constructor() { }

  ngOnInit() {
    this.empresa='CAS'
    this.cliente='Sermicro'
  }

}
