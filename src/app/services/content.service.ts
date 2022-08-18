import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Contents} from '../models/Contents/Contents'
import { NewContents } from '../models/Contents/NewContents';
import { UpdateContents } from '../models/Contents/UpdateContents';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http:HttpClient) { }

  ContentUrl = environment.apiBaseUrl+'/api/Content'

  getContentList():Observable<Contents[]>{
    return this.http.get<Contents[]>(this.ContentUrl);
  }
  getContent(id:string):Observable<Contents>{
    return this.http.get<Contents>(this.ContentUrl+'/'+id);
  }

  postContentInf(newContent: NewContents):Observable<Contents>{
    return this.http.post<Contents>(this.ContentUrl,newContent);
  }

  updateContent(id:string | undefined, updateContent: UpdateContents):Observable<Contents>{
    const httpHeaders = {headers:new HttpHeaders({"Content-Type": "application/json"})};
    return this.http.put<Contents>(this.ContentUrl +'/'+id,updateContent)
  }

  deleteContent(id: string | undefined): Observable<Contents>{
    return this.http.delete<Contents>(this.ContentUrl +'/'+ id)
  }
}
