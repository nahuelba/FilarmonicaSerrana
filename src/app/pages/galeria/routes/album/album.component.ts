import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from 'ngx-gallery-9';
import { GaleriaService } from '../../services/galeria.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  Album: string = "";

  galleryOptions: NgxGalleryOptions[] = [
    {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
    },
    // max-width 800
    {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
    },
    // max-width 400
    {
        breakpoint: 400,
        preview: false
    }
  ];
  galleryImages!: NgxGalleryImage[];



  constructor(
    private route: ActivatedRoute,
    private GaleriaService:GaleriaService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.Album = params['id'])

    this.GaleriaService.getAlbumImages(this.Album).subscribe((albums: string[]) => {
      this.galleryImages = albums.map(album =>{ 
        return {'url': album, 'small':album, 'medium':album, 'big':album}}
        )
      console.log(this.galleryImages)

    })

  }

}
