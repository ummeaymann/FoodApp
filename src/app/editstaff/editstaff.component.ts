import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StaffService } from '../Services/staff/staff.service';

@Component({
  selector: 'app-editstaff',
  templateUrl: './editstaff.component.html',
  styleUrls: ['./editstaff.component.css']
})
export class EditstaffComponent implements OnInit {
  result:any
selsectedstaff:any
  constructor(private staff:StaffService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id=this.route.snapshot.params['id'];
    console.log(id);
    console.log(typeof(id));
    this.staff.getstaff().subscribe((res)=>{
      this.result=res;
      console.log(this.result.data);
      
      for(let r of this.result.data){
        
        if(r.id == id){
          
          this.selsectedstaff=r;
          console.log(this.selsectedstaff);
          
        } 
      }
    })
  }
  staffedit(form:NgForm){
    this.staff.editstaffdetail(this.selsectedstaff.id,form.value).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['staff-detail']);
      this.staff.getstaff().subscribe((res1)=>{
        this.result=res;
      })
    })
  }
}
