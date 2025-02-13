import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../../interfaces/recipe.interface';
import { DataProviderService } from '../../services/data-provider.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss'
})
export class RecipesComponent implements OnInit{

  records: IRecipe[] = [];

  constructor(private _dataService: DataProviderService) { }
  
  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this._dataService.getRecipes().subscribe(resp => this.records = resp);
  }
}
