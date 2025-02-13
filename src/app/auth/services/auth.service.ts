import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_WEBSITE_URL } from '../../core/constants/BASE_WEBSITE_URL';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  logIn(userData: {}): Observable<any> {
    return this.http.post(`${BASE_WEBSITE_URL}/api/v1/auth/signin`, userData);
  }
  signUp(userData: {}): Observable<any> {
    return this.http.post(`${BASE_WEBSITE_URL}/api/v1/auth/signup`, userData);
  }
}
