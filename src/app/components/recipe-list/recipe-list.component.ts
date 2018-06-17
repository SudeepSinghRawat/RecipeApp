import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../model/recipe';
import { Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];
  recipeInProgess: Recipe;
  recipeLoaded: boolean;


  constructor(private router: Router, private recipeService: RecipeService) {
    this.recipeInProgess = Recipe.createBlank();
  }
  ngOnInit() {
    this.recipeService.getAllRecipe().then((recipe) => {
      this.recipes = recipe;
      this.recipeLoaded = true;
    });
  }
  public addRecipeClicked() {
    console.log(JSON.stringify(this.recipeInProgess, null, 2));
    this.recipes.unshift(this.recipeInProgess);
    this.recipeInProgess = Recipe.createBlank();
  }

  public userClickedOnRecipe(recipeId) {
    console.log(recipeId);
    this.router.navigateByUrl('/recipe/' + recipeId);
  }
  public viewaddRecipeClicked() {
    this.router.navigateByUrl('/addrecipe');
  }
}
