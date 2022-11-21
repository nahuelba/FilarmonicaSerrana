import { Component, OnInit } from '@angular/core';
import { GooglePhotosService } from 'src/app/core/services/google-photos.service';
import { Album, GaleriaService } from '../../services/galeria.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {

  Albums:Album[] = []

  constructor(
    private GaleriaService:GaleriaService
  ) { }

  ngOnInit(): void {
    this.GaleriaService.getAlbums().subscribe(Albums => this.Albums = Albums)
  }

}
