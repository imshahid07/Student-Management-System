import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private  baseUrl="http://localhost:8188/registration"
  private  baseUrl1="http://localhost:8188/Login"
  private  baseUrl4="http://localhost:8188"
  private baseurl3= "http://localhost:8188/addData"

  constructor(private httpClient:HttpClient) { }


  connectBackend(userData:any):Observable<object>{
    return this.httpClient.post(`${this.baseUrl}`,JSON.stringify(userData),
    {headers:{ 'content-type': 'application/json'}});
  }


  loginUser(logininfo:any):Observable<Boolean>{
    return this.httpClient.post<Boolean>(`${this.baseUrl1}`, JSON.stringify(logininfo),
    {headers:{'content-type': 'application/json'}});

  }

//   taskDetails(logininfo:any):Observable<Boolean>{
//    return this.httpClient.post<Boolean>(`${this.baseUrl3}`, JSON.stringify(logininfo),
//    {headers:{'content-type': 'application/json'}});

//  }

  getTaskDetails():Observable<any>{
    return this.httpClient.get(this.baseUrl4 + "/showtable");
  
  }

  updateModelTask(userData:any):Observable<any>{
    return this.httpClient.post(this.baseUrl4 + "/updateTask",JSON.stringify(userData),
    {headers:{ 'content-type': 'application/json'}});
  }

  deleteModelTask(id:number):Observable<any>{
    return this.httpClient.delete(this.baseUrl4 + "/delete/" + id);
}
AddmodelTask(userData:any):Observable<object>{
  return this.httpClient.post(`${this.baseurl3}`,JSON.stringify(userData),
  {headers:{ 'content-type': 'application/json'}});
}
}