import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  finalPrice = this.cartService.getFinalPrice();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  // Empty cart
  clearCart() {
    this.items = this.cartService.clearCart();
    this.finalPrice = 0;
  }

  // Remove a specific item from cart
  removeItemFromCart(id: number) {
    this.cartService.removeItemFromCart(id);
    this.finalPrice = 0;
    this.finalPrice = this.cartService.getFinalPrice();
  }

}
