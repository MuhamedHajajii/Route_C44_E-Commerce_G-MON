import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducts } from '../../interfaces/products/i-products';
import { BASE_WEBSITE_URL } from '../../constants/BASE_WEBSITE_URL';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<IProducts> {
    return this.http.get<IProducts>(`${BASE_WEBSITE_URL}/api/v1/products`);
  }
}
