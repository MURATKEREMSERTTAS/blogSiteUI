import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Authors } from '../models/Author/Authors';
import { environment } from 'src/environments/environment';
import { UpdateAuthor } from '../models/Author/UpdateAuthor';
import { NewAuthor } from '../models/Author/NewAuthor';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }
  
  Authorurl = 'https://b8fb-37-202-49-82.eu.ngrok.io/api/Author'
  getAuthorList():Observable<Authors[]>{
    return this.http.get<Authors[]>(this.Authorurl);
  }

  getAuthor(id:string):Observable<Authors>{
    return this.http.get<Authors>(this.Authorurl+'/'+id);
  }

  postAuthorInf(newAuthor: NewAuthor):Observable<Authors>{
    return this.http.post<Authors>(this.Authorurl,newAuthor);
  }

  updateAuthor(id:string | undefined, updateauthor: UpdateAuthor):Observable<Authors>{
    const httpHeaders = {headers:new HttpHeaders({"Content-Type": "application/json"})};
    return this.http.put<Authors>(this.Authorurl +'/'+id,updateauthor)
  }

  deleteAuthor(id: string | undefined): Observable<Authors>{
    return this.http.delete<Authors>(this.Authorurl +'/'+ id)
  }
}
