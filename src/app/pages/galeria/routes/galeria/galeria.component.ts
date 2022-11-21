import { Component, OnInit } from '@angular/core';
import { GooglePhotosService } from 'src/app/core/services/google-photos.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {

  constructor(
    private GooglePhotosService:GooglePhotosService
  ) { }

  ngOnInit(): void {
    this.GooglePhotosService.getAlbums()
  }

}
