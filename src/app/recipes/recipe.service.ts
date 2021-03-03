import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Hambuger',
      'This is simply a test',
      'http://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg'
    ),
    new Recipe(
      'Hamburger 2',
      'This is simply a copy',
      'http://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}

