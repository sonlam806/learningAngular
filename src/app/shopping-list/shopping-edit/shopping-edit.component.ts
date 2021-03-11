import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

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

  ngOnInit(): void {}

  onAddIngredient() {
    const newIngredient = {
      name: this.shoppingListForm.get('name')?.value,
      amount: this.shoppingListForm.get('amount')?.value,
    };
    this.shoppingListService.onAddNewIngredient(newIngredient);

    this.onSubmit();
  }

  onSubmit() {
    console.log('submitted!');
    this.shoppingListForm.reset();
  }
}

