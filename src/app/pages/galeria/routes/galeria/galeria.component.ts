import { Component, OnInit } from '@angular/core';
import { GaleriaService } from '../../services/galeria.service';
import { Data, InstagramFeed } from '../../interfaces/instagramFeed.interface';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {

  Posts:Data[] = []

  constructor(
    private GaleriaService:GaleriaService
  ) { }

  ngOnInit(): void {
    this.GaleriaService.getInstagramFeed().subscribe((InstagramFeed:InstagramFeed) => {
      console.log(InstagramFeed)
      this.Posts = InstagramFeed.data
    })
    // this.GaleriaService.getAlbums().subscribe(Albums => this.Albums = Albums)
  }

}
