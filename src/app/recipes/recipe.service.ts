import { EventEmitter, Injectable } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();
  addedRecipeToShoppingList = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Hambuger',
      'This is simply a test',
      'http://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg',
      [new Ingredient('bread', 10)]
    ),
    new Recipe(
      'Hamburger 2',
      'This is simply a copy',
      'http://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg',
      [new Ingredient('apple', 5)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  onAddIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients)

  }

}

