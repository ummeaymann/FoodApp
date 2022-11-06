import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  addCustomer(customer:any){
   return  this.http.post(`http://localhost:8080/bill/${localStorage.getItem("order_id")}`,customer)
  }
}
