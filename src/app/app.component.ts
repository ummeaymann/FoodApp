import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  role=localStorage.getItem("user_role")

  constructor(private route:Router){

  }

  logOut(){
    localStorage.removeItem('user_id')
    localStorage.removeItem('user_role')
    localStorage.removeItem('order_id')
    this.route.navigate(["/login"])


  }
}
