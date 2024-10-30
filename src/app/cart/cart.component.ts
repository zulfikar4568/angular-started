import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../data/products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  constructor(private cartService: CartService) {}

  items: Product[] = this.cartService.getItems();
}
