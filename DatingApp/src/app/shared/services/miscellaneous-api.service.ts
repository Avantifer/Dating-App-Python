import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { server } from 'src/environments/environment';
import { SendEmailInfo } from '../models/sendEmailInfo';

@Injectable({
  providedIn: 'root',
})
export class miscellaneousApiService {
  constructor(private http: HttpClient) {}

  endpoint: string = 'miscellaneous/';

  sendCodeVerificaction(sendEmailInfo: SendEmailInfo): Observable<string> {
    return this.http.post<string>(
      server.url + this.endpoint + 'sendCodeEmail',
      sendEmailInfo
    );
  }

  sendPasswordEmail(sendEmailInfo : SendEmailInfo): Observable<boolean> {
    return this.http.post<boolean>(server.url + this.endpoint + 'sendPasswordEmail', sendEmailInfo)
  }
}
