import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './routes/album/album.component';
import { GaleriaComponent } from './routes/galeria/galeria.component';

const routes: Routes = [
  {
    path:'',
    component:GaleriaComponent
  },
  {
    path:':id',
    component:AlbumComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GaleriaRoutingModule { }
