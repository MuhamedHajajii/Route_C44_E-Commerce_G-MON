import { Routes } from '@angular/router';

import { SignUpComponent } from './auth/page/sign-up/sign-up.component';

import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';
import { NotfoundComponent } from './pages/main/notfound/notfound.component';
// import { HomeComponent } from './pages/main/home/home.component';
// import { ProductsComponent } from './pages/main/products/products.component';
// import { CartComponent } from './pages/main/cart/cart.component';
// import { CategoriesComponent } from './pages/main/categories/categories.component';
// import { BrandsComponent } from './pages/main/brands/brands.component';
// import { DetailsComponent } from './pages/main/details/details.component';
import { SignInComponent } from './auth/page/sign-in/sign-in.component';
import { authGuard } from './core/guards/auth.guard';
import { logedUserGuard } from './core/guards/loged-user.guard';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    canActivate: [logedUserGuard],
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: SignInComponent },
      { path: 'register', component: SignUpComponent },
    ],
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/main/home/home.component').then(
            (e) => e.HomeComponent
          ),
      },
      {
        path: 'Products',
        loadComponent: () =>
          import('./pages/main/products/products.component').then(
            (e) => e.ProductsComponent
          ),
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('./pages/main/cart/cart.component').then(
            (e) => e.CartComponent
          ),
      },
      {
        path: 'categories',
        loadComponent: () =>
          import('./pages/main/categories/categories.component').then(
            (e) => e.CategoriesComponent
          ),
      },
      {
        path: 'brands',
        loadComponent: () =>
          import('./pages/main/brands/brands.component').then(
            (e) => e.BrandsComponent
          ),
      },
      {
        path: 'details/:id',
        loadComponent: () =>
          import('./pages/main/details/details.component').then(
            (e) => e.DetailsComponent
          ),
      },
    ],
  },
  { path: '**', component: NotfoundComponent },
];
