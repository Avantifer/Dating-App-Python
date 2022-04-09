import { Component, OnInit } from '@angular/core';
import { CharacteristicProduct } from 'src/app/shared/models/characteristic';

@Component({
  selector: 'app-secret-love-mega',
  templateUrl: './secret-love-mega.component.html',
  styleUrls: ['./secret-love-mega.component.scss'],
})
export class SecretLoveMegaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  characteristics: CharacteristicProduct[] = [
    new CharacteristicProduct(
      'visibility',
      'See who likes you',
      'You will be able to know whose crush you are.'
    ),
    new CharacteristicProduct(
      'star',
      'Top Picks',
      'Look who are the top people of Secret Love.'
    ),
    new CharacteristicProduct(
      'favorite',
      'Unlimited Likes',
      'Catch feelings for as many people you want.'
    ),
    new CharacteristicProduct(
      'place',
      'Passport',
      'Change your location wherever you want.'
    ),
    new CharacteristicProduct(
      'replay',
      'Rewind',
      'Go back in time and redo your last Like or Nop.'
    ),
  ];
}
