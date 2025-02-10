import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_WEBSITE_URL } from '../../constants/BASE_WEBSITE_URL';
import { ICategories } from '../../interfaces/categories/i-categories';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<ICategories> {
    return this.http.get<ICategories>(`${BASE_WEBSITE_URL}/api/v1/categories`);
  }
}
