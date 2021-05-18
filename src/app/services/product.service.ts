import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { productsUrl } from 'src/app/config/api';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  
  getProducts(): Observable<Product[]> {
    // Populate products list from an API
    return this.http.get<Product[]>(productsUrl);
  }
}
