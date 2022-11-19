import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  nav:string[] = [
    "Inicio",
    "Biografía",
    "Blog",
    "Conciertos",
    "Discografía",
    "Contacto"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
