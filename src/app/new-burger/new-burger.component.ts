import { Component, OnInit } from '@angular/core';
import { BurgerService } from '../services/burger.service';
import { Burger } from '../models/Burger.model';

import { Router } from '@angular/router';

import { FormBuilder, FormGroup, FormArray, Validators } from "@angular/forms";

@Component({
  selector: 'app-new-burger',
  templateUrl: './new-burger.component.html',
  styleUrls: ['./new-burger.component.scss']
})
export class NewBurgerComponent implements OnInit {
  burgers: Burger[] = [];
  burgerForm: FormGroup =  this.formBuilder.group({
    id: '',
    price: ['', Validators.required],
    name: ['', Validators.required],
    ingredients: this.formBuilder.array([]),
    url: ['', Validators.required]
  })

  constructor(
    private burgerService: BurgerService, 
    private formBuilder: FormBuilder, 
    private router: Router) { }

  ngOnInit(): void {
    this.burgers = this.burgerService.getBurgers();
  }

  // Return ingredients as a form array
  // Allows to use it in template
  getIngredients(): FormArray {
    return this.burgerForm.get("ingredients") as FormArray;
  }

  // Add ingredient
  onAddIngredient() {
    const newIngredientControl = this.formBuilder.control(null, Validators.required);
    this.getIngredients().push(newIngredientControl);
  }

  // Submit Form
  onSubmitForm(): void {
    // Values from form
    const formValue = this.burgerForm.value;
    // New burger instance
    const newBurger = new Burger(
      this.burgers.length + 1,
      1,
      formValue["price"],
      formValue["name"],
      formValue["ingredients"],
      true,
      formValue["url"] ? formValue["url"] : []
    )
    this.burgerService.addBurger(newBurger);
    this.router.navigate(['/admin']);
  }
}
