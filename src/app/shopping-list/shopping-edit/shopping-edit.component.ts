import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  ingredientName: string = '';
  ingredientAmount: number = 0;

  @Output() newIngredientAdded = new EventEmitter<Ingredient>();

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  onAddIngredient() {
    this.shoppingListService.onAddNewIngredient({
      name: this.ingredientName,
      amount: this.ingredientAmount,
    })

    this.ingredientName = '';
    this.ingredientAmount = 0;
  }
}

