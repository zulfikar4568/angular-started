import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../data/products';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {}

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  items: Product[] = this.cartService.getItems();
}
