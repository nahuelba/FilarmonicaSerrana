import { Component, OnInit } from '@angular/core';
import { info } from 'src/app/core/interfaces/card.interface';

@Component({
  selector: 'app-conciertos',
  templateUrl: './conciertos.component.html',
  styleUrls: ['./conciertos.component.scss']
})
export class ConciertosComponent implements OnInit {

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
