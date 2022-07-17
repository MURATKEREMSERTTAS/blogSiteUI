import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NewSetting } from '../models/Settings/NewSetting';
import { Setting } from '../models/Settings/Setting';
import { UpdateSetting } from '../models/Settings/UpdateSetting';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(private http:HttpClient) { }
  
  SettingUrl = environment.apiBaseUrl+'api/Setting'
  getSettingList():Observable<Setting[]>{
    return this.http.get<Setting[]>(this.SettingUrl);
  }

  getSetting(id:string):Observable<Setting>{
    return this.http.get<Setting>(this.SettingUrl+'/'+id);
  }

  postSettingInf(newSetting: NewSetting):Observable<Setting>{
    return this.http.post<Setting>(this.SettingUrl,newSetting);
  }

  updateSetting(id:string | undefined, updateSetting: UpdateSetting):Observable<Setting>{
    const httpHeaders = {headers:new HttpHeaders({"Content-Type": "application/json"})};
    return this.http.put<Setting>(this.SettingUrl +'/'+id,updateSetting)
  }

  deleteSetting(id: string | undefined): Observable<Setting>{
    return this.http.delete<Setting>(this.SettingUrl +'/'+ id)
  }
}

