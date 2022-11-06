import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaffService } from '../Services/staff/staff.service';

@Component({
  selector: 'app-staffdetail',
  templateUrl: './staffdetail.component.html',
  styleUrls: ['./staffdetail.component.css']
})
export class StaffdetailComponent implements OnInit {
  searchStaff:any=""
  result:any
  constructor(private staff:StaffService, private router:Router) { }

  ngOnInit(): void {
    this.staff.getstaff().subscribe((res)=>{
      this.result=res;
      console.log(this.result);
    })
  }

  deletestaff(id:any){
    let result = confirm("Are you sure!");
    if(result){
    this.staff.deletestaff(id).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['staff']);
      this.staff.getstaff().subscribe((res)=>{
        this.result=res;
      })
    })
  }
  }

}
