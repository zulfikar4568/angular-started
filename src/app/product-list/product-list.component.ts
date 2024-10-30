import { Component } from "@angular/core";
import { Product, products } from "../data/products";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  public products: Product[] = products;

  public share() {
    window.alert('The product has been shared!');
  }

  public onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
