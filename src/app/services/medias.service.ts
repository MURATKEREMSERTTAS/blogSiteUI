import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Medias } from '../models/Medias/Medias';
import { NewMedias } from '../models/Medias/NewMedias';
import { UpdateMedias } from '../models/Medias/UpdateMedias';

@Injectable({
  providedIn: 'root'
})
export class MediasService {

  constructor(private http:HttpClient) { }

  MediasUrl = environment.apiBaseUrl+'api/Medias'

  getMediasList():Observable<Medias[]>{
    return this.http.get<Medias[]>(this.MediasUrl
  );
  }
  getMedias(id:string):Observable<Medias>{
    return this.http.get<Medias>(this.MediasUrl
  +'/'+id);
  }

  postMediasInf(newMedias: NewMedias):Observable<Medias>{
    return this.http.post<Medias>(this.MediasUrl
  ,newMedias);
  }

  updateMedias(id:string | undefined, updateMedias:UpdateMedias):Observable<Medias>{
    const httpHeaders = {headers:new HttpHeaders({"Content-Type": "application/json"})};
    return this.http.put<Medias>(this.MediasUrl+'/'+id,updateMedias)
  }

  deleteMedias(id: string | undefined): Observable<Medias>{
    return this.http.delete<Medias>(this.MediasUrl+'/'+ id)
  }
}
