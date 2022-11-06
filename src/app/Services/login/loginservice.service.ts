import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http:HttpClient) { }

  login(user:any){
    return this.http.post("http://localhost:8080/login",user);
  }

  register(user :any){
    return this.http.post("http://localhost:8080/users",user);
  }
}
