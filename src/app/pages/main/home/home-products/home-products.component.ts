import { Component, Input } from '@angular/core';
import { IProducts } from '../../../../core/interfaces/products/i-products';
import { ProudctsCardComponent } from '../../../../shared/components/proudcts-card/proudcts-card.component';

@Component({
  selector: 'app-home-products',
  imports: [ProudctsCardComponent],
  templateUrl: './home-products.component.html',
  styleUrl: './home-products.component.css',
})
export class HomeProductsComponent {
  @Input() allProducts!: IProducts;
}
