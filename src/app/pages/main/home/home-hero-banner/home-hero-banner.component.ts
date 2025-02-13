import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-hero-banner',
  imports: [CarouselModule],
  templateUrl: './home-hero-banner.component.html',
  styleUrl: './home-hero-banner.component.css',
})
export class HomeHeroBannerComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplaySpeed: 1200,
    navSpeed: 100,
    lazyLoad: true,
    navText: ['', ''],
    items: 1,
    nav: true,
  };
}
