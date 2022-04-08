import { Component, OnInit } from '@angular/core';
import { CharacteristicProduct } from 'src/app/shared/models/characteristic';

@Component({
  selector: 'app-secret-love-ultra',
  templateUrl: './secret-love-ultra.component.html',
  styleUrls: ['./secret-love-ultra.component.scss']
})
export class SecretLoveUltraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  characteristics : CharacteristicProduct[] = [
    new CharacteristicProduct('visibility', 'See who likes you', 'You will be able to know whose crush you are.'),
    new CharacteristicProduct('star', 'Top Picks', 'Look who are the top people of Secret Love.'),
    new CharacteristicProduct('favorite', 'Unlimited Likes', 'Catch feelings for as many people you want.'),
    new CharacteristicProduct('place', 'Passport', 'Change your location wherever you want.'),
    new CharacteristicProduct('replay', 'Rewind', 'Go back in time and redo your last Like or Nop.'),
    new CharacteristicProduct('emoji_events', 'Priority Likes', 'Your profile is seen faster by the people you Like.'),
    new CharacteristicProduct('send', 'Add a Note to the Super Like', 'Attach a note to every Super Like you send.')
  ];
}
