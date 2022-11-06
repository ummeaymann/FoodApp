import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { throws } from 'assert';
import { LoginserviceService } from '../Services/login/loginservice.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private registor:LoginserviceService,private router:Router) { }

  ngOnInit(): void {
  }

  regUser(form:NgForm){
    console.log(form.value)
    this.registor.register(form.value).subscribe((res)=>{
      console.log(res)
      this.router.navigate(["/login"])
    
    })
  }

}
