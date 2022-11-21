import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GooglePhotosService {

  constructor(
    private http:HttpClient
  ) { }

  getAlbums(){
    // https://photos.app.goo.gl/g6NuWCDqTpr1GQ2i9

    // GooglePhotosAlbum.fetchImageUrls('https://photos.app.goo.gl/QCXy6XaKX5x1AynH8').then(console.log)

    //Album ejemplo https://www.flickr.com/services/rest?method=flickr.photosets.getPhotos&api_key=1443afc5f1503a8560682b8afd8c460c&photoset_id=72177720303887008&format=json&nojsoncallback=1&user_id=196977685@N07&extras=url_sq

    //Get todos los albumes https://www.flickr.com/services/rest?method=flickr.photosets.getList&api_key=1443afc5f1503a8560682b8afd8c460c&format=json&nojsoncallback=1&user_id=196977685@N07
    const url = 'https://www.flickr.com/services/rest?method=flickr.galleries.getPhotos&api_key=1443afc5f1503a8560682b8afd8c460c&gallery_id=72177720303887008&format=json&nojsoncallback=1';

    return this.http.get(url).subscribe(console.log)

  }
}
