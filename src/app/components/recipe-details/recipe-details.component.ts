import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';


import { Recipe } from '../../model/recipe';
import { Location } from '@angular/common';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipe: Recipe;

  constructor(private route: ActivatedRoute, private location: Location,  private recipeService: RecipeService) {

  }

  ngOnInit(): void {

    // const id = +this.route.snapshot.paramMap.get('recipeId');
    // this.recipe = this.findRecipeById(id);
    // console.log(id);
    this.route.paramMap.subscribe((params: ParamMap) => {
      const recipeId = parseInt(params.get('recipeId'), 10);
      this.recipeService.getRecipeById(recipeId).then((recipe) => {
        this.recipe = recipe;
        console.log(recipe);
      });
    });
  }
  gobackbuttonPressed(): void {
    this.location.back();
  }

}
