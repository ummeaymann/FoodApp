import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { OrderService } from '../Services/order/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  items:any=[]

  constructor(private order:OrderService,private router:Router) { }

  ngOnInit(): void {
    this.order.getOrder().subscribe((data)=>{
      console.log(data)
      this.items=data
      
    })

  }


  deleteItem(id:any){
    this.order.deleteItem(id).subscribe((data)=>{
      console.log(data)
      // this.router.navigate(["/order"])
      this.ngOnInit()
    })

    

  }
  increment(item:any){
    item.quantity++
    console.log(item)
    this.order.updateItem(item,item.id).subscribe((data)=>{
      console.log(data)
      this.ngOnInit()
    })

  }
  decrement(item:any){
    item.quantity--
    this.order.updateItem(item,item.id).subscribe((data)=>{
      console.log(data)
      this.ngOnInit()
    })
  }


  deleteOrder(){
    this.order.deleteOrder().subscribe((data)=>{
      console.log(data)
      this.router.navigate(["/products"])
    })

  }

}
