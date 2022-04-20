import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginScreenService } from '../services/login-screen.service';

@Injectable({
  providedIn: 'root'
})
export class LoginScreenGuard implements CanActivate {
  constructor(private loginScreen : LoginScreenService, private router : Router) {  }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
    if (!this.loginScreen.hasAccess()) {
      this.router.navigate(['/home'])
      return false
    }
    
    return true
  }
  
}
