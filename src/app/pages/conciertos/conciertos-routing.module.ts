import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConciertosComponent } from './components/conciertos/conciertos.component';

const routes: Routes = [
  {
    path:'',
    component:ConciertosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConciertosRoutingModule { }
