import { Injectable } from '@angular/core';
import { Recipe } from '../model/recipe';
// import {HttpModule } from '@angular/Http';
import { HttpClient } from '@angular/common/http';



const RECIPE_SERVER = 'http://localhost:8080';

@Injectable()
export class RecipeService {
  constructor(private http: HttpClient) {
  }
  getAllRecipe(): any {
    return this.http
        .get<Recipe[]>(RECIPE_SERVER + '/v1/recipes.json')
        .pipe();
  }
  getRecipeById(recipeId: number):any {
    return this.http
    .get<Recipe>(RECIPE_SERVER+'/v1/recipes/'+ recipeId +'.json')
    .pipe();
  }

}
