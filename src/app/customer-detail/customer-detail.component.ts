import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../Services/customer/customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  constructor(private cutomerService:CustomerService,private route:Router) { }

  ngOnInit(): void {
  }

  regUser(form:any){
console.log(form.value)

this.cutomerService.addCustomer(form.value).subscribe((data)=>{
  console.log(data)
  window.alert("Email sent to the customer");
  this.route.navigate(["/products"])

})
  }

}
