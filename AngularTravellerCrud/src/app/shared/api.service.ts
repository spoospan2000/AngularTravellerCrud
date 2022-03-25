import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) 
  { 

  }

  postTraveller(data:any)
  {
    return this.http.post<any>("https://localhost:44384/api/Traveller",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getTraveller()
  {
    return this.http.get<any>("https://localhost:44384/api/Traveller")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  updateTraveller(data:any,Id:number)
  {
    return this.http.put<any>("https://localhost:44384/api/Traveller/"+Id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteTraveller(Id:number)
  {
    return this.http.delete<any>("https://localhost:44384/api/Traveller/"+Id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}