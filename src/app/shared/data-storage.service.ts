import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  private recipesURL =
    'https://angular-http-request-abcd3-default-rtdb.firebaseio.com/recipes.json';

  constructor(
    private http: HttpClient,
    private recipesService: RecipeService
  ) {}

  storeRecipes() {
    const recipes = this.recipesService.getRecipes();
    this.http
      .put(this.recipesURL, recipes)
      .subscribe((response) => console.log(response));
  }

  fetchRecipes() {
    this.http.get<Recipe[]>(this.recipesURL).subscribe(
      (recipes) => {
        this.recipesService.updateRecipes(recipes);
      },
      (err) => console.log('error', err)
    );
  }
}

