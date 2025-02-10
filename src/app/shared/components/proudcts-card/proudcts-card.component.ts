import { Component, Input } from '@angular/core';
import { IProductsArr } from '../../../core/interfaces/products/i-products';

@Component({
  selector: 'app-proudcts-card',
  imports: [],
  templateUrl: './proudcts-card.component.html',
  styleUrl: './proudcts-card.component.css',
})
export class ProudctsCardComponent {
  @Input() products!: IProductsArr;
}
