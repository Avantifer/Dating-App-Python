import { Component, OnInit } from '@angular/core';
import { Characteristic } from 'src/app/shared/models/characteristic.interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  characteristics : Characteristic[] = [
    {'img' : '../../../assets/icons/star-icon.png', 'text' : 'Find the most committed singles.'},
    {'img' : '../../../assets/icons/config-icon.png', 'text' : 'Detailed profiles, search by criteria and geolocation.'},
    {'img' : '../../../assets/icons/mobile-phone-icon.png', 'text' : 'Secret always accompanies you so you can see him wherever you want.'},
    {'img' : '../../../assets/icons/user-icon.png', 'text' : 'The most serious dating service.'}
  ]
}
