import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getDownloadURL, listAll, ListResult, ref, Storage, StorageReference } from '@angular/fire/storage';
import { combineLatest, concatMap, from, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { InstagramFeed } from '../interfaces/instagramFeed.interface';

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {



  constructor(
    private HttpClient:HttpClient
  ) { }


  getInstagramFeed(): Observable<InstagramFeed>{
    return this.HttpClient.get<InstagramFeed>(`https://graph.instagram.com/me/media?fields=media_url,media_type,permalink&access_token=${environment.instagramToken}`)
  }

}

 
