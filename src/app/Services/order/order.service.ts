import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  addOrder(order:any){
    return this.http.post("http://localhost:8080/foodOrder",order)
  }

  getOrder(){
    return this.http.get(`http://localhost:8080/foodOrder/${localStorage.getItem('order_id')}`)
  }

  getOrderByStaffId(){
    if(localStorage.getItem("user_role")=="manager")
    return this.http.get(`http://localhost:8080/foodOrder`)
   return this.http.get(`http://localhost:8080/orderdetails/${localStorage.getItem('user_id')}`)
  }

  deleteOrder(){
    return this.http.delete(`http://localhost:8080/foodOrder/${localStorage.getItem('order_id')}`)
  }



  deleteItem(id:any){
    return this.http.delete(`http://localhost:8080/items/${id}`)
  }

  updateItem(item:any,id:any){
    return this.http.put(`http://localhost:8080/items/${id}`,item);
  }
}
