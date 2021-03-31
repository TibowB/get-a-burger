import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from "@angular/forms";

import { Burger } from "../models/Burger.model";
import { BurgerService } from '../services/burger.service';
import { CartService } from "../services/cart.service";

@Component({
  selector: 'app-burger-detail',
  templateUrl: './burger-detail.component.html',
  styleUrls: ['./burger-detail.component.scss']
})
export class BurgerDetailComponent implements OnInit {
  burger?: Burger;
  addedToCart: boolean = false;
  addToCartForm= this.formBuilder.group({
    quantity: 1
  });

  constructor(private route: ActivatedRoute, private burgerService: BurgerService, private cartService: CartService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    // Convert to number
    const burgerIdFromRoute = Number(routeParams.get('burgerId'));
    this.burger = this.burgerService.getSingleBurger(burgerIdFromRoute);
    // Reset burger quantity
    if (this.burger) this.burger.quantity = 0;
  }

  // Add burger to cart
  onSubmit(product: Burger, id: number) {
    let quantity = Number(this.addToCartForm.value["quantity"]);
    this.cartService.addToCart(product, quantity, id);
    this.addedToCart = true;
    setTimeout(() => {
      this.addedToCart = false
    }, 3000);
  }

}
