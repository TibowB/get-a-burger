import { Injectable } from '@angular/core';
import { Burger } from '../models/Burger.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Burger[] = [];
  finalPrice: number = 0;

  constructor() { }

  // Get items in the cart
  getItems() {
    return this.items;
  }

  // Add an item to the cart
  addToCart(product: Burger, quantity: number, id: number) {
    if (this.items.findIndex(item => item.id === id)) {
      this.items.push(product);
    }
    // If item already in cart, update quantity
    this.items.forEach(item => {
      if (item.id === id) {
        if (quantity === 0) {
          item.quantity = quantity;
        } else {
          item.quantity += quantity;
        }

      } 
    });
  }

  // Remove all items form cart
  clearCart() {
    this.items = [];
    this.getFinalPrice();
    return this.items;
  }

  // Remove a single item from cart
  removeItemFromCart(id: number) {
    // Get item index
    const itemIndex = this.items.findIndex(item => item.id === id);  
    // Remove item
    this.items.splice(itemIndex, 1);
    this.getFinalPrice();
    return this.items;
  }

  // Get final price
  getFinalPrice(): number {
    this.finalPrice = 0;
    if (this.items.length === 0) this.finalPrice = 0;
    this.items.forEach(item => {
      let itemPrice = item.quantity * item.price;
      this.finalPrice += itemPrice;
    });
    return this.finalPrice
  }
  

}
