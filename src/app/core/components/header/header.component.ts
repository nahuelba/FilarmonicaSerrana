import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { link } from '../../interfaces/header.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations:[
    trigger('menu', [
      transition(':enter', [
        style({opacity:0}),
        animate(300, style({opacity:1})) 
      ]),
      transition(':leave', [
        animate(300, style({opacity:0})) 
      ])
    ])
  ]
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

  navFixed: boolean = false;
  scrollOffset: number = 100;


  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.navFixed = (window.pageYOffset 
      || document.documentElement.scrollTop 
      || document.body.scrollTop || 0
    ) > this.scrollOffset;
  }

}
