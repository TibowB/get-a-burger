import { Component, OnInit } from '@angular/core';
import { BurgerService } from '../services/burger.service';
import { Burger } from '../models/Burger.model';

@Component({
  selector: 'app-burgers-list',
  templateUrl: './burgers-list.component.html',
  styleUrls: ['./burgers-list.component.scss']
})
export class BurgersListComponent implements OnInit {
  burgers: Burger[] = [];

  constructor(private burgerService: BurgerService) { }

  ngOnInit() {
    this.burgers = this.burgerService.getBurgers();
  }

}
