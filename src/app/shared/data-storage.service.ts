import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

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
    this.http.put(this.recipesURL, recipes).subscribe();
  }

  fetchRecipes() {
<<<<<<< HEAD
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        return this.http.get<Recipe[]>(this.recipesURL, {
          params: new HttpParams().set(
            'auth',
            user.token !== null ? user.token : ''
          ),
        });
      }),
=======
    return this.http.get<Recipe[]>(this.recipesURL).pipe(
>>>>>>> b7c6e700436ea1da9f8fee6a35f81e75921e3a96
      map((recipes) =>
        recipes.map((recipe) => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : [],
          };
        })
      ),
      tap((recipes) => this.recipesService.updateRecipes(recipes))
    );
  }
}
