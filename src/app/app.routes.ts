import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';
import { NotfoundComponent } from './pages/main/notfound/notfound.component';
import { SignInComponent } from './auth/page/sign-in/sign-in.component';
import { SignUpComponent } from './auth/page/sign-up/sign-up.component';
import { HomeComponent } from './pages/main/home/home.component';
import { CategoriesComponent } from './pages/main/categories/categories.component';
import { BrandsComponent } from './pages/main/brands/brands.component';
import { DetailsComponent } from './pages/main/details/details.component';
import { CartComponent } from './pages/main/cart/cart.component';
import { ProductsComponent } from './pages/main/products/products.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: '', redirectTo: 'auth', pathMatch: 'full' },
      { path: 'login', component: SignInComponent },
      { path: 'register', component: SignUpComponent },
    ],
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
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
