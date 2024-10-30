import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../data/products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss']
})
export class ProductAlertsComponent {

  // The @Input() decorator indicates that the property value passes in from the component's parent
  @Input() product!: Product;

  // @Output() allows the ProductAlertsComponent to emit an event when the value of the notify property changes.
  @Output() notify = new EventEmitter();
}
