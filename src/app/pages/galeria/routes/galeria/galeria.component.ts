import { Component, OnInit } from '@angular/core';
import { GooglePhotosService } from 'src/app/core/services/google-photos.service';
import { GaleriaService } from '../../services/galeria.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {

  foto: string = "";

  constructor(
    private GaleriaService:GaleriaService
  ) { }

  ngOnInit(): void {
    this.GaleriaService.getAlbums().then(foto => this.foto =foto)
  }

}
