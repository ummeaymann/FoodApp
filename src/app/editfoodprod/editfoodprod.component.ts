import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../Services/product-detail/product.service';

@Component({
  selector: 'app-editfoodprod',
  templateUrl: './editfoodprod.component.html',
  styleUrls: ['./editfoodprod.component.css']
})
export class EditfoodprodComponent implements OnInit {
  result:any
  selsectedprod:any
  constructor(private route:ActivatedRoute,private product:ProductService,private router:Router) { }

  ngOnInit(): void {
    let id=this.route.snapshot.params['id'];
    console.log(id);
    console.log(typeof(id));
    this.product.getproducts().subscribe((res)=>{
      this.result=res;
      console.log(this.result.data);
      
      for(let r of this.result.data){
        
        if(r.id == id){
          
          this.selsectedprod=r;
          console.log(this.selsectedprod);
          
        } 
      }
    })
  }


  editprod(form:NgForm){
    this.product.editproductdata(this.selsectedprod.id,form.value).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['products']);
      this.product.getproducts().subscribe((res1)=>{
        this.result=res;
      })
    })
  }

}
