import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cas-pie',
  templatUrl: ./pie.component.html ,
  template: `
    <p>
      pie works!
    </p>
  `,
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
