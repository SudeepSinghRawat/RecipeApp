import { Injectable } from '@angular/core';
import { Recipe } from '../model/recipe';
import {Http } from '@angular/Http';


const RECIPE_SERVER = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(private http: Http) {
  }
  getAllRecipe(): Promise<Recipe[]> {
    return this.http
        .get(RECIPE_SERVER + '/v1/recipes.json')
        .toPromise()
        .then(response => response.json().data as Recipe []);
  }
  getRecipeById(recipeId: number): Promise<Recipe> {
    return null;
    // return new Promise((reslove, reject) => {
    //   setTimeout(() => {
    //     for (const recipe of this.recipes) {
    //       if (recipe.id === recipeId) {
    //         reslove(recipe);
    //       }
    //     }
    //   }, 2000);
    // });
  }

}
