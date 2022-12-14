import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  fileAddress="http://localhost:8000/uploads"
  apiUrl:String="http://localhost:8000/api";

  constructor(private http : HttpClient) { }

  //list response
  getResponse(){
    return this.http.get(`${this.apiUrl}/listresponse`)
  }

  // add response
  addResponse(data:any){
    return this.http.post<any>(`${this.apiUrl}/addresponse`, data)
  }
  
  // to list single response
  getSingleResponse(id:any){
    return this.http.get<any>(`${this.apiUrl}/singleresponse/${id}`)
  }

  //to edit 
  editResponse(id:any,data:any)
  {
    return this.http.put(`${this.apiUrl}/editresponse/${id}`,data)
  }

}
