import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe = { name: '', description: '', imagePath: '', ingredients: [{name: '', amount: 0}] };

  constructor(private recipesService: RecipeService) {}

  ngOnInit(): void {
    this.recipesService.selectedRecipe.subscribe((recipe) => {
      this.selectedRecipe = recipe;
    });
  }
}

