import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean{

  if(localStorage.getItem("user_id")!=null ){
    return true;
  }

  else{
  window.alert("login to view products")
  return false
  }
  }
  
  
}
