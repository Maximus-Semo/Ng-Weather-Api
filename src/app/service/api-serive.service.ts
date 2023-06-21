import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiSeriveService {  
  constructor(private http:HttpClient) { }
  baseUrl = 'http://localhost:3000';
  // header :{} | any ;
  postAccount(data:any){
   return this.http.post(this.baseUrl, data);
  }
  
  getAccount(){
    return this.http.get(`${this.baseUrl}/ACCOUNT_USER`)
  }

  deleteAccount(){

  }
  sendPasswordResetLink(data: any) {
    return this.http.patch(`${this.baseUrl}/ACCOUNT_USER`,data)
  }

}
