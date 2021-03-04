import { EventEmitter, Injectable } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Bread', 2),
    new Ingredient('Meat', 1),
    new Ingredient('Chesse', 1),
  ];

  constructor() { }

  getIngredientsList() {
    return this.ingredients.slice();
  }

  onAddNewIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);

    this.ingredientsChanged.emit(this.ingredients.slice())
  }

}
