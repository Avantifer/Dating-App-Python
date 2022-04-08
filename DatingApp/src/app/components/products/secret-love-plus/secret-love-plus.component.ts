import { Component, OnInit } from '@angular/core';
import { CharacteristicProduct } from 'src/app/shared/models/characteristic';

@Component({
  selector: 'app-secret-love-plus',
  templateUrl: './secret-love-plus.component.html',
  styleUrls: ['./secret-love-plus.component.scss']
})
export class SecretLovePlusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  characteristics : CharacteristicProduct[] = [
    new CharacteristicProduct('favorite', 'Unlimited Likes', 'Catch feelings for as many people you want.'),
    new CharacteristicProduct('place', 'Passport', 'Change your location wherever you want.'),
    new CharacteristicProduct('replay', 'Rewind', 'Go back in time and redo your last Like or Nop.')
  ]
}
