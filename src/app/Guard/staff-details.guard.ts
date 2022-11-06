import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffDetailsGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {

      if(localStorage.getItem("user_id")!=null &&  localStorage.getItem("user_role")=="manager"){
        return true;
      }
    
      else{
      window.alert("Login as manager to view Staff details")
      return false
      }
      }
   
  }
  

