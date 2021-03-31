import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Burger } from '../models/Burger.model';
import { BURGERS } from '../models/mock-burgers';

@Injectable({
  providedIn: 'root'
})
export class BurgerService {
  burgers: Burger[] = BURGERS;
  burger?: Burger;

  // Return all burgers
  getBurgers(): Burger[] {
    return this.burgers;
  }

  // Return a single burger based on his id
  getSingleBurger(id: number) {
    this.burger = this.burgers.find(burger => burger.id === id)
    return this.burger;
  }
  // Add a new burger
  addBurger(burger: Burger) {
    this.burgers.push(burger);
  }
}
