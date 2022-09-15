import { Component, OnInit } from '@angular/core';
import {  Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[]=[
    new Ingredient('Apple',5),
    new Ingredient('potato',10),
    new Ingredient('banana',5),
    new Ingredient('carrot',5)

  ];
  onIngredientAdded(ingredient:Ingredient)
  {
    this.ingredients.push(ingredient);
  }

  constructor() { }

  ngOnInit(): void {
  }

}