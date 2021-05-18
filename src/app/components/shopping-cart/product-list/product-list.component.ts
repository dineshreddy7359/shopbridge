import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = [];
  wishList: number[] = [];

  constructor(private productService: ProductService,
    private wishlistService: WishlistService) { }

  ngOnInit(): void {
    this.getProductList();
    this.loadWishlist();
  }

  getProductList() {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.productList = products;
    });
  }

  loadWishlist() {
    this.wishlistService.getWishlist().subscribe((productIds) => {
      this.wishList = productIds;
    });
  }

}
