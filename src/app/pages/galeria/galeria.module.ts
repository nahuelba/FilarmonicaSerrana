import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GaleriaRoutingModule } from './galeria-routing.module';
import { GaleriaComponent } from './routes/galeria/galeria.component';
import { NgxGalleryModule } from 'ngx-gallery-images-video';


@NgModule({
  declarations: [
    GaleriaComponent
  ],
  imports: [
    CommonModule,
    GaleriaRoutingModule,
    NgxGalleryModule
  ]
})
export class GaleriaModule { }
