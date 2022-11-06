import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StaffService } from '../Services/staff/staff.service';

@Component({
  selector: 'app-addstaff',
  templateUrl: './addstaff.component.html',
  styleUrls: ['./addstaff.component.css']
})
export class AddstaffComponent implements OnInit {
  result1:any
  constructor(private staff:StaffService, private router:Router) { }

  ngOnInit(): void {

  }
  staffadd(form: NgForm){
    console.log(form.value);
    this.staff.addstaffdetail(form.value).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['staff-detail']);
      this.staff.getstaff().subscribe((res1)=>{
        this.result1=res1;
      })
    })

  }

}
