import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventCardComponent } from './components/event-card/event-card.component';



@NgModule({
  declarations: [
    EventCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    EventCardComponent
  ]
})
export class SharedModule { }
