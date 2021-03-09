import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit, OnDestroy {
  selectedRecipe: Recipe = {
    name: '',
    description: '',
    imagePath: '',
    ingredients: [{ name: '', amount: 0 }],
  };
  // @ts-ignore
  private selectedRecipeSub: Subscription;

  constructor(private recipesService: RecipeService) {}

  ngOnInit(): void {
    this.selectedRecipeSub = this.recipesService.selectedRecipe.subscribe(
      (recipe) => {
        this.selectedRecipe = recipe;
      }
    );
  }

  ngOnDestroy() {
    this.selectedRecipeSub.unsubscribe();
  }
}

