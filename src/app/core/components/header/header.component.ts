import { Component, OnInit } from '@angular/core';
import { link } from '../../interfaces/header.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  nav:link[] = [
    {
      path:'',
      name:'Inicio'
    },
    {
      path:'/nosotros',
      name:'Nosotros'
    },
    // {
    //   path:'/blog',
    //   name:'Blog'
    // },
    {
      path:'/conciertos',
      name:'Conciertos'
    },
    {
      path:'/galeria',
      name:'Galería'
    },
    {
      path:'/contacto',
      name:'Contacto'
    }
  ]

  menuMobile:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
