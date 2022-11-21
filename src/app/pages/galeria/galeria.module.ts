import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GaleriaRoutingModule } from './galeria-routing.module';
import { GaleriaComponent } from './routes/galeria/galeria.component';
import { AlbumComponent } from './routes/album/album.component';
import { NgxGalleryModule } from 'ngx-gallery-9';


@NgModule({
  declarations: [
    GaleriaComponent,
    AlbumComponent
  ],
  imports: [
    CommonModule,
    GaleriaRoutingModule,
    NgxGalleryModule
  ]
})
export class GaleriaModule { }
