import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cas-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
logo: string
logoAlt: string
  constructor() { }

  ngOnInit() {
    this.logo = '../../assets/logo.svg'
    this.logoAlt = 'Logotipo de Angular'
  }

}
