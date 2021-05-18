import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cartUrl } from '../config/api';
import { Cart } from '../models/cart';
import { Product } from '../models/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCartItems(): Observable<Cart[]> {
    // Populate cart items from an API
    return this.http.get<Cart[]>(cartUrl).pipe(
      map((result: any[]) => {
        let cartItems: Cart[] = [];
        for (let item of result) {
          let productExists = false;
          for (let i in cartItems) {
            if (cartItems[i].productId === item.product.id) {
              cartItems[i].qty++
              productExists = true;
              break;
            }
          }
          if (!productExists) {
            cartItems.push(new Cart(item.id, item.product));
          }
        }
        return cartItems;
      })
    );
  }

  addProductToCart(product: Product[]): Observable<any> {
    return this.http.post(cartUrl, {product});
  }

}
