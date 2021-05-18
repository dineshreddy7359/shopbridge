import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: Cart[] = [];
  cartTotal = 0;

  constructor(private message: MessengerService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartItems();
  }

  handleSubscription() {
    this.message.getMsg().subscribe((product: any) => {
      this.loadCartItems();
    });
  }

  loadCartItems() {
    this.cartService.getCartItems().subscribe((items: Cart[]) => {
      this.cartItems = items;
      this.calculateCartItemTotal();
    });
  }

  calculateCartItemTotal() {
    this.cartTotal = 0;
    this.cartItems.forEach((item:any) => {
      this.cartTotal += (item.qty * item.price)
    });
  }

}
