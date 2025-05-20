import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private  baseUrl="http://localhost:8188/registration"
  private  baseUrl1="http://localhost:8188/Login"
  constructor(private httpClient:HttpClient) { }

  connectBackend(userData:any):Observable<object>{
    
    return this.httpClient.post(`${this.baseUrl}`,JSON.stringify(userData),
    {headers:{ 'content-type': 'application/json'}});
  }

  loginUser(logininfo:any):Observable<Boolean>{
    return this.httpClient.post<Boolean>(`${this.baseUrl1}`, JSON.stringify(logininfo),
    {headers:{'content-type': 'application/json'}});

  }

}