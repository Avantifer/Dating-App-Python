import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginScreenService {

  constructor() { }

  access : boolean = false;
  email : string = '';
  password : string = '';
  
  wantsAccess() : void {
    this.access = true;
  }

  removeAccess() : void {
    this.access = false;
  }
  
  hasAccess() : boolean {
    return this.access;
  }
}
