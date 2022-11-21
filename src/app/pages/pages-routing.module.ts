import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path:'conciertos',
      loadChildren: () => import('./conciertos/conciertos.module').then(m => m.ConciertosModule)
  },
  {
    path:'nosotros',
      loadChildren: () => import('./nosotros/nosotros.module').then(m => m.NosotrosModule)
  },
  {
    path:'contacto',
      loadChildren: () => import('./contacto/contacto.module').then(m => m.ContactoModule)
  },
  {
    path:'galeria',
    loadChildren: () => import('./galeria/galeria.module').then(m => m.GaleriaModule)

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
