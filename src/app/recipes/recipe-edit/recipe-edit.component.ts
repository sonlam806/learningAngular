import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  id: number = -1;
  editMode = false;
  recipeForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipesService: RecipeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] !== undefined;

      this.createForm();
    });
  }

  private createForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipesService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe['ingredients']) {
        for (let ingredient of recipe['ingredients']) {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/),
              ]),
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imageURL: new FormControl(recipeImagePath, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      recipeIngredients: recipeIngredients,
    });
  }

  onSubmit() {
    const newRecipe: Recipe = {
      name: this.recipeForm.get('name')?.value,
      imagePath: this.recipeForm.get('imageURL')?.value,
      description: this.recipeForm.get('description')?.value,
      ingredients: this.recipeForm.get('recipeIngredients')?.value,
    };
    // update case
    if (this.editMode) {
      this.recipesService.updateRecipe(this.id, newRecipe);
      this.router.navigate(['../'], { relativeTo: this.route });
    } else {
      this.recipesService.addRecipe(newRecipe);
      this.router.navigate(['recipes']);
    }
  }

  getRecipeFormControls() {
    return (<FormArray>this.recipeForm.get('recipeIngredients')).controls;
  }

  onAddIngredient() {
    const newControl = new FormGroup({
      name: new FormControl(null, Validators.required),
      amount: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/),
      ]),
    });

    (<FormArray>this.recipeForm.get('recipeIngredients')).push(newControl);
  }

  onCancel() {
    this.recipeForm.reset();
    this.router.navigate(['recipes']);
  }

  onDeleteRecipe(index: number) {
    (<FormArray>this.recipeForm.get('recipeIngredients')).removeAt(index);
  }
}

