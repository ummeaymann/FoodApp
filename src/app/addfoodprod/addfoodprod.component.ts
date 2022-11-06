import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../Services/product-detail/product.service';

@Component({
  selector: 'app-addfoodprod',
  templateUrl: './addfoodprod.component.html',
  styleUrls: ['./addfoodprod.component.css']
})
export class AddfoodprodComponent implements OnInit {
  result:any
  constructor(private product:ProductService,private router:Router) { }

  ngOnInit(): void {
  }
  addprod(form:NgForm){
    
    form.value.menu={"id":form.value.menu_id}
    console.log(form.value);
    this.product.addproductdata(form.value).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['products']);
      this.product.getproducts().subscribe((res1)=>{
        this.result=res1;
      })
    })
  }

}
