import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../../core/services/products/products.service';
import { IProducts } from '../../../core/interfaces/products/i-products';
import { HomeProductsComponent } from './home-products/home-products.component';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ICategories } from '../../../core/interfaces/categories/i-categories';
import { CategoriesService } from '../../../core/services/categories/categories.service';

@Component({
  selector: 'app-home',
  imports: [CarouselModule, HomeProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  allProducts!: IProducts;

  productsService = inject(ProductsService);

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories();
  }

  getAllProducts(): void {
    this.productsService.getAllProducts().subscribe({
      next: (response) => {
        console.log(response);
        this.allProducts = response;
      },
    });
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplaySpeed: 1500,
    navSpeed: 100,
    lazyLoad: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 6,
      },
    },
    nav: false,
  };

  allCategories!: ICategories;

  categoriesService = inject(CategoriesService);

  getAllCategories(): void {
    this.categoriesService.getAllCategories().subscribe({
      next: (response) => {
        console.log(response);
        this.allCategories = response;
      },
    });
  }
}
