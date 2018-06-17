import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../model/recipe';

@Component({
  selector: 'app-edit-new-recipe',
  templateUrl: './edit-new-recipe.component.html',
  styleUrls: ['./edit-new-recipe.component.css']
})
export class EditNewRecipeComponent implements OnInit {

  recipeInProgess: Recipe;
  constructor() {
    this.recipeInProgess = Recipe.createBlank();
   }

  ngOnInit() {
  }
  public addIngredients() {
    if (!this.recipeInProgess.ingredient) {
      this.recipeInProgess.ingredient = [{ingredient: null , measure: null}];

    } else {
      this.recipeInProgess.ingredient.push( {ingredient: null , measure: null} );
    }
  }
  public removeIngredients(index): void {
    this.recipeInProgess.ingredient.splice(index, 1);
  }
  public addInstruction() {
    if (!this.recipeInProgess.ingredient) {
      this.recipeInProgess.instruction = [{instruction: null , photo: null}];

    } else {
      this.recipeInProgess.instruction.push( {instruction: null , photo: null} );
    }
  }
  public removeInstruction(index): void {
    this.recipeInProgess.instruction.splice(index, 1);
  }

}
