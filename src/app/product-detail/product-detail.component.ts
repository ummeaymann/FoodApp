import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../Services/order/order.service';
import { ProductService } from '../Services/product-detail/product.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
 
  role=localStorage.getItem("user_role")
  products:any={}
  totalPrice:any=0

  itemList:any=[]
  
  searchProduct:any=""

  orderDetails:any={"user":{"id":localStorage.getItem("user_id")}}
 

  response:any={}

  

  constructor(private productService:ProductService,private orderService:OrderService,private router: Router) { }

  ngOnInit(): void {
    this.productService.getproducts().subscribe((data)=>{
      console.log("hello")
      console.log(data)
      this.products=data
    })
  }

  addItem(form:any,product:any){
    const tempProduct={
      ...product
    }
    delete tempProduct.id
    console.log("heollp")
   
   console.log(form)
     tempProduct.quantity=form.value.quantity
    
    this.totalPrice+=product.price*form.value.quantity
    this.itemList.push(tempProduct)
  
  }

  order(){
    console.log(this.itemList)
    this.orderDetails.item=this.itemList
    this.orderDetails.status="pending"
    this.orderDetails.totalPrice=this.totalPrice
    console.log(this.orderDetails)
    this.orderService.addOrder(this.orderDetails).subscribe((res)=>{
      console.log(res)
      this.response=res
    localStorage.setItem("order_id",this.response.data.id)
    this.router.navigate(["order"])

    });

  }

  deleteproduct(id:any){

    let result = confirm("Are you sure!");
    if(result){
    this.productService.deleteProductdata(id).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['products']);
      this.productService.getproducts().subscribe((res)=>{
        this.products=res;
      })
    })

  }
  }

}
