import { Injectable } from '@angular/core';
import { Order } from '../models/Order.model';
import { ORDERS } from "../models/mock-orders";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orders: Order[] = ORDERS;
  order?: Order;

  constructor() { }

  // Get orders
  getOrders(): Order[] {
    return this.orders;
  }

  // Get single order
  getSingleOrder(id: number) {
    this.order = this.orders.find(order => order.id === id)
    return this.order;
  }


  // New order
  addOrder(order: Order) {
    this.orders.push(order);
  }


  // Validate order
  validateOrder(id: number): void {
    const order = this.getSingleOrder(id);
    if (order) order.isValidated = true;
  }

}
