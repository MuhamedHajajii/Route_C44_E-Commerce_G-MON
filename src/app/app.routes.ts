import { Routes } from '@angular/router';

import { SignUpComponent } from './auth/page/sign-up/sign-up.component';

import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';
import { BrandsComponent } from './pages/main/brands/brands.component';
import { CartComponent } from './pages/main/cart/cart.component';
import { CategoriesComponent } from './pages/main/categories/categories.component';
import { DetailsComponent } from './pages/main/details/details.component';
import { HomeComponent } from './pages/main/home/home.component';
import { NotfoundComponent } from './pages/main/notfound/notfound.component';
import { ProductsComponent } from './pages/main/products/products.component';
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
      { path: 'home', component: HomeComponent },
      { path: 'Products', component: ProductsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'brands', component: BrandsComponent },
      { path: 'details/:id', component: DetailsComponent },
    ],
  },
  { path: '**', component: NotfoundComponent },
];
