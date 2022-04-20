import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {
  constructor(private router: Router, private jwt: JwtHelperService) {}

  canActivate(): | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    try {
      let token = this.jwt.decodeToken(localStorage.getItem('auth')!);
      let id = token.sub.id;
      this.router.navigate(['/main']);
      return false;
    } catch (error) {
      return true;
    }
  }
}
