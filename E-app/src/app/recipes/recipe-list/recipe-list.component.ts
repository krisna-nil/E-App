import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected=new EventEmitter<Recipe>();
  recipes:Recipe[]=[
    new Recipe('Burger','this is simply a testy','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Samosha','this is simply a testy','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Eggs role','this is simply a testy','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')

  ];

  constructor() { }

  ngOnInit(): void {
  }
onRecipeSelected(recipe:Recipe)
{
this.recipeWasSelected.emit(recipe);
}
}
