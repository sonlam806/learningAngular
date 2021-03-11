import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ShoppingListService } from '../shopping-list.service';

import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @Output() newIngredientAdded = new EventEmitter<Ingredient>();
  shoppingListForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    amount: new FormControl(null, [Validators.required]),
  });

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.shoppingListService.ingredientEdit.subscribe(
      (ingredient: Ingredient) => {
        this.shoppingListForm.patchValue({
          name: ingredient.name,
          amount: ingredient.amount,
        });
      }
    );
  }

  onAddIngredient() {
    const newIngredient = {
      name: this.shoppingListForm.get('name')?.value,
      amount: this.shoppingListForm.get('amount')?.value,
    };
    this.shoppingListService.onAddNewIngredient(newIngredient);

    this.shoppingListForm.reset();
  }

  clearForm() {
    this.shoppingListForm.reset();
  }
}

