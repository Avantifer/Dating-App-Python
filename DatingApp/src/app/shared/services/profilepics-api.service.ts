import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfilePic } from '../models/profilePic';
import { server } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfilepicsApiService {

  private endpoint: string = 'profilepics/';

  constructor(private http: HttpClient) { }

  create(profilepic : ProfilePic) : Observable<boolean> {
    return this.http.post<boolean>(server.url + this.endpoint + 'create', profilepic)
  }
}
