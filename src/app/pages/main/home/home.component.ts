import { Component, inject, OnInit } from '@angular/core';
import { IProducts } from '../../../core/interfaces/products/i-products';
import { ProductsService } from '../../../core/services/products/products.service';
import { HomeProductsComponent } from './home-products/home-products.component';
import { HomeSecondBannerComponent } from './home-second-banner/home-second-banner.component';
import { HomeHeroBannerComponent } from './home-hero-banner/home-hero-banner.component';

@Component({
  selector: 'app-home',
  imports: [
    HomeProductsComponent,
    HomeSecondBannerComponent,
    HomeHeroBannerComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  allProducts!: IProducts;

  productsService = inject(ProductsService);

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productsService.getAllProducts().subscribe({
      next: (response) => {
        console.log(response);
        this.allProducts = response;
      },
    });
  }
}
