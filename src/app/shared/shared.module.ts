import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventCardComponent } from './components/event-card/event-card.component';
import { RedesSocialesComponent } from './components/redes-sociales/redes-sociales.component';



@NgModule({
  declarations: [
    EventCardComponent,
    RedesSocialesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    EventCardComponent,
    RedesSocialesComponent
  ]
})
export class SharedModule { }
