import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainGuard implements CanActivate {
  constructor(private router: Router, private jwt: JwtHelperService) {}

  canActivate(): | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    try {
      let token = this.jwt.decodeToken(localStorage.getItem('auth')!);
      let id = token.sub.id;
      return true;
    } catch (error) {
      localStorage.removeItem('auth');
      this.router.navigate(['/home']);
      return false;
    }
  }
}
