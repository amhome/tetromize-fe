import { Injectable } from '@angular/core';
import { IRecipe } from '../interfaces/recipe.interface';

const RECIPE_KEY = "saved-recipes";


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  clear(): void {
    window.sessionStorage.clear();
  }

  // Note: it doesn't care about the existing item that may be added previously
  public addRecipe(item: IRecipe): void {
    var recipes = this.getRecipes();
    recipes.push(item);
    window.sessionStorage.setItem(RECIPE_KEY, JSON.stringify(recipes));
  }

  public getRecipes(): IRecipe[] {
    const storage = window.sessionStorage.getItem(RECIPE_KEY);
    return storage ? JSON.parse(storage) : [];
  }

  public removeRecipe(item: IRecipe) {
    var recipes = this.getRecipes();
    recipes.splice(recipes.indexOf(item), 1);
    window.sessionStorage.setItem(RECIPE_KEY, JSON.stringify(recipes));
  }
}
