import { Recipe } from './recipe.model'

export class RecipeService {
  private  recipes: Recipe[] = [
    new Recipe('Hambuger', 'This is simply a test','http://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg' ),
    new Recipe('Hamburger 2', 'This is simply a copy','http://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg' )
  ];
  private selectedRecipe: Recipe = {name: '', description: '', imagePath: ''};


  getRecipes() {
    return this.recipes.slice();
  }

  getSelectedRecipe() {
    return this.selectedRecipe;
  }

  onGetSelectedRecipe(id: number) {
    this.selectedRecipe = this.recipes.slice()[id];
    return this.selectedRecipe;
  }
}
