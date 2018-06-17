import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from '../components/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from '../components/recipe-details/recipe-details.component';
import { EditNewRecipeComponent } from '../components/edit-new-recipe/edit-new-recipe.component';



const router: Routes = [
  {
    path: 'recipe', component: RecipeListComponent
  },
  {
    path: 'addrecipe', component: EditNewRecipeComponent
  },
  {
    path: 'recipe/:recipeId', component: RecipeDetailsComponent
  },
  {
    path: '', redirectTo: '/recipe', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule ]


})


export class RecipeRoutingModule { }
