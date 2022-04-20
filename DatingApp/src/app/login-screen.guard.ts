import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginScreenService } from './shared/services/login-screen.service';

@Injectable({
  providedIn: 'root'
})
export class LoginScreenGuard implements CanActivate {
  constructor(private loginScreen : LoginScreenService, private router : Router) {  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
    if (!this.loginScreen.hasAccess()) {
      this.router.navigate(['/home'])
      return false
    }
    
    return true
  }
  
}
