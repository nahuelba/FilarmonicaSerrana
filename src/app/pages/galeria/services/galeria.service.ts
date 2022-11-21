import { Injectable } from '@angular/core';
import { getDownloadURL, listAll, ListResult, ref, Storage, StorageReference } from '@angular/fire/storage';
import { combineLatest, concatMap, from, map } from 'rxjs';

export interface Album {
  image: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {



  constructor(
    private storage: Storage

  ) { }

  getAlbums(){
    return from(listAll(ref(this.storage, 'Fotos/'))).pipe(concatMap((ListResult:ListResult) => {
      let observables: any[] = [];
      
      ListResult.items.forEach((foto:StorageReference) => {
        observables.push(from(getDownloadURL(ref(this.storage, foto.fullPath))).pipe(map( (url:string) => {
          return {
            image:url,
            name: foto.name.slice(0, -4)
          }          
        })))
      })

      console.log(observables);
      return combineLatest(observables);
    }))
  // return getDownloadURL(ref(this.storage, 'Fotos/Embalse.jpg'))

  }
}
