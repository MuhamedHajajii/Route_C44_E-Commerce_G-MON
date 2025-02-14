import { Component, Input } from '@angular/core';
import { IProducts } from '../../../../core/interfaces/products/i-products';
import { ProudctsCardComponent } from '../../../../shared/components/proudcts-card/proudcts-card.component';
import { SearchProductsPipe } from '../../../../shared/pipes/search-products.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-products',
  imports: [ProudctsCardComponent, SearchProductsPipe, FormsModule],
  templateUrl: './home-products.component.html',
  styleUrl: './home-products.component.css',
})
export class HomeProductsComponent {
  @Input() allProducts!: IProducts;
  searchValue: string = '';
}
