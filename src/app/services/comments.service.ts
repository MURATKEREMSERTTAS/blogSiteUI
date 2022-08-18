import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comments } from '../models/Comments/Comments';
import { NewComments } from '../models/Comments/NewComments';
import { UpdateComments } from '../models/Comments/UpdateComments';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http:HttpClient) { }

  CommentUrl = 'https://localhost:5001/api/Comments'

  getContentList():Observable<Comments[]>{
    return this.http.get<Comments[]>(this.CommentUrl);  
  }
  getContent(id:string):Observable<Comments>{
    return this.http.get<Comments>(this.CommentUrl+'/'+id);
  }

  postContentInf(newComment: NewComments):Observable<Comments>{
    return this.http.post<Comments>(this.CommentUrl,newComment);
  }

  updateContent(id:string | undefined, updateComment: UpdateComments):Observable<Comments>{
    const httpHeaders = {headers:new HttpHeaders({"Content-Type": "application/json"})};
    return this.http.put<Comments>(this.CommentUrl +'/'+id,updateComment)
  }

  deleteContent(id: string | undefined): Observable<Comments>{
    return this.http.delete<Comments>(this.CommentUrl +'/'+ id)
  }
}
