import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NewTags } from '../models/Tags/NewTags';
import { Tags } from '../models/Tags/Tags';
import { UpdateTags } from '../models/Tags/UpdateTags';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http:HttpClient) { }

  TagUrl = environment.apiBaseUrl+'api/Tags'

  getTagsList():Observable<Tags[]>{
    return this.http.get<Tags[]>(this.TagUrl);
  }
  getTags(id:string):Observable<Tags>{
    return this.http.get<Tags>(this.TagUrl+'/'+id);
  }

  postTagsInf(newTags: NewTags):Observable<Tags>{
    return this.http.post<Tags>(this.TagUrl,newTags);
  }

  updateTags(id:string | undefined, updateTags: UpdateTags):Observable<Tags>{
    const httpHeaders = {headers:new HttpHeaders({"Content-Type": "application/json"})};
    return this.http.put<Tags>(this.TagUrl +'/'+id,updateTags)
  }

  deleteTags(id: string | undefined): Observable<Tags>{
    return this.http.delete<Tags>(this.TagUrl +'/'+ id)
  }
}