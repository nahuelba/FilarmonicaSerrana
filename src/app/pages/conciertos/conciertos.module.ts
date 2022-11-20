import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConciertosRoutingModule } from './conciertos-routing.module';
import { ConciertosComponent } from './components/conciertos/conciertos.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ConciertosComponent
  ],
  imports: [
    CommonModule,
    ConciertosRoutingModule,
    SharedModule
  ]
})
export class ConciertosModule { }
