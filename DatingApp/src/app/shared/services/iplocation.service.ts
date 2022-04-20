import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IplocationService {

  constructor(private http : HttpClient) { }

  getIp() : Observable<string>{
    return this.http.get<string>('https://api.ipify.org/?format=json');
  }

  getIpLocation(ipAddress : string) : Observable<object> {
    return  this.http.get('https://ipapi.co/' + ipAddress + '/json/');
  }
}
