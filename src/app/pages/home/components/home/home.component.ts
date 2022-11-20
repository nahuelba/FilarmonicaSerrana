import { Component, OnInit } from '@angular/core';
import { info } from 'src/app/core/interfaces/card.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  eventos:info[] = [
    {
      title:'Evento 1',
      description: 'Esta es una descripción del evento',
      image:'https://via.placeholder.com/200x200',
      date: new Date(),
      hour:'12:00 am',
      place:'LUgar de ejemplo 1'
    },
    {
      title:'Evento 1',
      description: 'Esta es una descripción del evento',
      image:'https://via.placeholder.com/200x200',
      date: new Date(),
      hour:'12:00 am',
      place:'LUgar de ejemplo 1'
    },
    {
      title:'Evento 1',
      description: 'Esta es una descripción del evento',
      image:'https://via.placeholder.com/200x200',
      date: new Date(),
      hour:'12:00 am',
      place:'LUgar de ejemplo 1'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
