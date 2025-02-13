import { Component, inject, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ICategories } from '../../../../core/interfaces/categories/i-categories';
import { CategoriesService } from '../../../../core/services/categories/categories.service';

@Component({
  selector: 'app-home-second-banner',
  imports: [CarouselModule],
  templateUrl: './home-second-banner.component.html',
  styleUrl: './home-second-banner.component.css',
})
export class HomeSecondBannerComponent implements OnInit {
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

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories(): void {
    this.categoriesService.getAllCategories().subscribe({
      next: (response) => {
        console.log(response);
        this.allCategories = response;
      },
    });
  }
}
