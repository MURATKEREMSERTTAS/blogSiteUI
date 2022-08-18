import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categories } from '../models/Category/Categories';
import { NewCategories } from '../models/Category/NewCategories';
import { UpdateCategories } from '../models/Category/UpdateCategories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http:HttpClient) { }
  
  Categoiesurl = 'https://b8fb-37-202-49-82.eu.ngrok.io/api/Categories'
  getCategoiesList():Observable<Categories[]>{
    return this.http.get<Categories[]>(this.Categoiesurl);
  }

  getCategoies(id:string):Observable<Categories>{
    return this.http.get<Categories>(this.Categoiesurl+'/'+id);
  }

  postCategoiesInf(NewCategories: NewCategories):Observable<Categories>{
    return this.http.post<Categories>(this.Categoiesurl,NewCategories);
  }

  updateCategoies(id:string | undefined, updateCategoies: UpdateCategories):Observable<Categories>{
    const httpHeaders = {headers:new HttpHeaders({"Content-Type": "application/json"})};
    return this.http.put<Categories>(this.Categoiesurl +'/'+id,updateCategoies)
  }

  deleteCategoies(id: string | undefined): Observable<Categories>{
    return this.http.delete<Categories>(this.Categoiesurl +'/'+ id)
  }
}
