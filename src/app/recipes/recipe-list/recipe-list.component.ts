import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  @Output() selectedRecipe = new EventEmitter<Recipe>();

  constructor(
    private recipesService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.recipes = this.recipesService.getRecipes();
  }

  ngOnInit(): void {}

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}

