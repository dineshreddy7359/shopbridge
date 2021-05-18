import { Product } from "./product";

export class Cart {
    id: number;
    productId: number;
    productName: string;
    qty: number;
    price: number;

    constructor(id = 1, product: Product, qty = 1) {
        this.id = id
        this.productId = product.id
        this.productName = product.name
        this.qty = qty
        this.price = product.price
    }
}
