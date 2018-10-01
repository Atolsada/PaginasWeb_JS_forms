import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { LogoComponent } from './logo/logo.component';
import { PieComponent } from './pie/pie.component';
import {MenuComponent} from './menu/menu.component'
import { MainComponent } from './main/main.component';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  declarations: [ 
    CabeceraComponent, 
    LogoComponent,
    PieComponent,
    MenuComponent,
    MainComponent],
  providers:[],
  exports:[
    CabeceraComponent,
    PieComponent,
    MenuComponent,
    MainComponent
  ],
  bootstrap: []
})
export class CoreModule { }
