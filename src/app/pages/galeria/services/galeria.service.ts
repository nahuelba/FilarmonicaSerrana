import { Injectable } from '@angular/core';
import { getDownloadURL, listAll, ref, Storage } from '@angular/fire/storage';


@Injectable({
  providedIn: 'root'
})
export class GaleriaService {



  constructor(
    private storage: Storage

  ) { }

  getAlbums(){
  //  listAll(ref(this.storage, 'Fotos/embalse.png')).then(console.log)
  return getDownloadURL(ref(this.storage, 'Fotos/Embalse.jpg'))

  }
}
