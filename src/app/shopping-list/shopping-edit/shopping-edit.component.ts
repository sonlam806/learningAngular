import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  ingredientName: string = '';
  ingredientAmount: number = 0;

  @Output() newIngredientAdded = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit(): void {}

  onAddIngredient() {
    this.newIngredientAdded.emit({
      name: this.ingredientName,
      amount: this.ingredientAmount,
    });

    this.ingredientName = '';
    this.ingredientAmount = 0;
  }
}

