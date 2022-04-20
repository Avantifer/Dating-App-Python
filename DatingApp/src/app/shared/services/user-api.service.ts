import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { server } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  private endpoint: string = 'user/';

  constructor(private http: HttpClient) { }

  register(user : User) : Observable<boolean>{
    return this.http.post<boolean>(server.url + this.endpoint + 'register', user);
  }

  getUser(email : string) : Observable<User> {
    return this.http.get<User>(server.url + this.endpoint + 'find/' + email);
  }
}
