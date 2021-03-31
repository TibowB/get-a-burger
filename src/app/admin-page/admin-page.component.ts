import { Component, OnInit } from '@angular/core';
import { BurgerService } from '../services/burger.service';
import { Burger } from '../models/Burger.model';
import { OrderService } from "../services/order.service";

import { Order } from '../models/Order.model';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  burgers: Burger[] = [];
  orders: Order[] = []

  constructor(
    private burgerService: BurgerService, 
    private orderService: OrderService
    ) { }

  ngOnInit(): void {
    this.burgers = this.burgerService.getBurgers();
    this.orders = this.orderService.getOrders();
  }

  // Make a burger available
  onBurgerAvailable(id: number) {
    let burger = this.burgerService.getSingleBurger(id);
    if (burger) burger.isAvailable = true;
  }

  // Make a burger unavailable
  onBurgerUnavailable(id: number) {
    let burger = this.burgerService.getSingleBurger(id);
    if (burger) burger.isAvailable = false;
  }

  // Validate order
  onValidateOrder(id: number): void {
    this.orderService.validateOrder(id);
  }
}
