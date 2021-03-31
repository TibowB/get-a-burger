import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Order } from '../models/Order.model';
import { Burger } from '../models/Burger.model';
import { CartService } from '../services/cart.service';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {
  items: Burger[] = this.cartService.getItems();
  orders: Order[] = this.orderService.getOrders();
  orderForm: FormGroup = this.formBuilder.group({
    user: ['', Validators.required],
    email: ['', Validators.required]
    });

  constructor(
    private cartService: CartService, 
    private orderService: OrderService,
    private formBuilder: FormBuilder,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  // Submit new order
  onSubmitForm(): void {
    // Values from form
    const formValue = this.orderForm.value;
    const newOrder = new Order(
      this.orders.length + 1,
      formValue["user"],
      formValue["email"],
      this.items,
      this.cartService.getFinalPrice(),
      false
    );
    this.orderService.addOrder(newOrder);
    this.cartService.clearCart();
    this.router.navigate(['/confirmation'])
  }

}
