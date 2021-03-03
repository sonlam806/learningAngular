import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Hambuger',
      'This is simply a test',
      'http://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg'
    ),
    new Recipe(
      'Hamburger 2',
      'This is simply a copy from above',
      'http://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg'
    ),
  ];

  @Output() selectedRecipe = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit(): void {}

  recipeSelected(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }
}

