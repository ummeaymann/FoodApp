import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getproducts(){
   return this.http.get("http://localhost:8080/foodProduct")
  }

  addproductdata(product:any){
    return this.http.post("http://localhost:8080/foodProduct",product)
  }
  editproductdata(id:any,product:any){
    return this.http.put(`http://localhost:8080/foodProduct/${id}`,product)
  }
  deleteProductdata(id:any){
    return this.http.delete(`http://localhost:8080/foodProduct/${id}`);
  }


}
