import { Component, OnInit } from '@angular/core';
import { CardProduct } from 'src/app/shared/models/card';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  cards: CardProduct[] = [
    new CardProduct(
      '../../../assets/img/product1_img.webp',
      'Secret Love Plus',
      ['Unlimited likes', 'Unlimited Rewinds', 'Passport to any location'],
      5,
      'secret-love-plus'
    ),
    new CardProduct(
      '../../../assets/img/product2_img.webp',
      'Secret Love Mega',
      [
        'See who likes you',
        'New Top Picks every day',
        'And everything from Secret Love Plus',
      ],
      15,
      'secret-love-mega'
    ),
    new CardProduct(
      '../../../assets/img/product3_img.webp',
      'Secret Love Ultra',
      ['Message before matching', 'Prioritised likes', 'And everything from Secret Love Mega'],
      30,
      'secret-love-ultra'
    ),
  ];
}
