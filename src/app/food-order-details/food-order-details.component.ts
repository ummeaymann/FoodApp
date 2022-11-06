import { Component, OnInit } from '@angular/core';
import { OrderService } from '../Services/order/order.service';

@Component({
  selector: 'app-food-order-details',
  templateUrl: './food-order-details.component.html',
  styleUrls: ['./food-order-details.component.css']
})
export class FoodOrderDetailsComponent implements OnInit {
  searchOrder:any=""
  result: any;
  constructor(private order:OrderService) { }
  

  ngOnInit(): void {

    this.order.getOrderByStaffId().subscribe((data)=>{
        console.log(data)
        this.result=data;
    }
   )

  }

}
