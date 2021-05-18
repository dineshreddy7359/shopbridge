import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  
  @Input() productItem: any;
  @Input() addedToWishlist: boolean = false;

  constructor(private message: MessengerService,
    private cartService: CartService,
    private wishlistService: WishlistService) { }

  ngOnInit(): void {
  }

  handleAddToCart() {
    this.cartService.addProductToCart(this.productItem).subscribe(() => {
      this.message.sendMsg(this.productItem);
    });
  }

  handleAddToWishlist() {
    this.wishlistService.addToWishlist(this.productItem.id).subscribe(() => {
      this.addedToWishlist = true;
    });
  }

  handleRemoveFromWishlist() {
    this.wishlistService.removeFromWishlist(this.productItem.id).subscribe(() => {
      this.addedToWishlist = false;
    });
  }

}
