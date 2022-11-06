import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginserviceService } from '../Services/login/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginStatus:any
  constructor(private login:LoginserviceService,private route:Router) { }
 
  ngOnInit(): void {
  }
  logUser(form:NgForm){

    console.log(form.value)
    this.login.login(form.value).subscribe((result)=>{
      console.log(result)
      this.loginStatus=result
     localStorage.setItem("user_id",this.loginStatus.data.id)
     localStorage.setItem("user_role",this.loginStatus.data.role)
     this.route.navigate(["/products"])

    },(error)=>{
      window.alert("invalid user credentials")
    })
   
  }

}
