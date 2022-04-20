import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { keyEncrypt } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EncrDecrService {

  constructor() { }
  
  encrypt(value : string){
    return CryptoJS.AES.encrypt(value, keyEncrypt.key).toString();
  }

  decrypt(value : string){
    return CryptoJS.AES.decrypt(value, keyEncrypt.key).toString(CryptoJS.enc.Utf8);
  }
}
