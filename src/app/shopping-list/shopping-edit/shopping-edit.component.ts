import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ShoppingListService } from '../shopping-list.service';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @Output() newIngredientAdded = new EventEmitter<Ingredient>();
  editMode = false;
  editItemIndex: number = -1;
  editItemSub!: Subscription;
  shoppingListForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    amount: new FormControl(null, [Validators.required]),
  });

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.editItemSub = this.shoppingListService.ingredientEdit.subscribe(
      ({ index, ingredient }: { index: number; ingredient: Ingredient }) => {
        this.editMode = true;
        this.editItemIndex = index;
        this.shoppingListForm.patchValue({
          name: ingredient.name,
          amount: ingredient.amount,
        });
      }
    );
  }

  onAddIngredient(): void {
    if (this.editMode) {
      this.shoppingListService.updateEditIngredient(this.editItemIndex, {
        name: this.shoppingListForm.get('name')?.value,
        amount: this.shoppingListForm.get('amount')?.value,
      });
    } else {
      const newIngredient = {
        name: this.shoppingListForm.get('name')?.value,
        amount: this.shoppingListForm.get('amount')?.value,
      };
      this.shoppingListService.onAddNewIngredient(newIngredient);
    }
    this.resetFormState();
  }

  ngOnDestroy() {
    this.editItemSub.unsubscribe();
  }
  clearForm() {
    this.resetFormState();
  }

  deleteIngredient() {
    this.shoppingListService.deleteIngredient(this.editItemIndex);

    this.resetFormState();
  }

  resetFormState() {
    this.editMode = false;
    this.editItemIndex = -1;
    this.shoppingListForm.reset();
  }
}

