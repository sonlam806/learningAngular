import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  ingredientEdit = new Subject<{
    index: number;
    ingredient: Ingredient;
  }>();
  private ingredients: Ingredient[] = [
    new Ingredient('Bread', 2),
    new Ingredient('Meat', 1),
    new Ingredient('Chesse', 1),
  ];

  constructor() {}

  getIngredientsList() {
    return this.ingredients.slice();
  }

  getIngredientByIndex(index: number) {
    const selectedIngredient = this.ingredients.slice()[index];
    this.ingredientEdit.next({ index: index, ingredient: selectedIngredient });
  }

  onAddNewIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);

    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateEditIngredient(index: number, ingredient: Ingredient) {
    this.ingredients[index] = ingredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}

