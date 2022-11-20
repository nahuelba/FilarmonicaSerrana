import { Component, Input, OnInit } from '@angular/core';
import { info } from 'src/app/core/interfaces/card.interface';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

  @Input() info!: info;

  constructor() { }

  ngOnInit(): void {
  }

}
