import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlexibleService {

  constructor(private _http:HttpClient) { }
  public getAllRecord():Observable<any>{
    let apiRoot = 'assets/flexi.json';
    return this._http.get(apiRoot)
  }
  public getSingleRecord(id):Observable<any>{
   return  this.getAllRecord();
  }
}
