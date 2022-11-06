import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private http:HttpClient) { }

  getstaff(){
    return this.http.get("http://localhost:8080/users")
  }
  addstaffdetail(staff:any){
    return this.http.post("http://localhost:8080/users",staff)
  }
  editstaffdetail(id:any,staff:any){
    return this.http.put(`http://localhost:8080/users/${id}`,staff)
  }
  deletestaff(id:any){
    return this.http.delete(`http://localhost:8080/users/${id}`);
  }

}
