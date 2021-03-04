import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe = new Recipe('', '', '', [{name: '', amount: 0}]);

  constructor(private recipesService: RecipeService) {}

  ngOnInit(): void {}

  toShoppingList() {
    this.recipesService.onAddIngredientsToShoppingList(this.recipe.ingredients);
  }
}

