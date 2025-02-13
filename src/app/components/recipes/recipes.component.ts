import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../../interfaces/recipe.interface';
import { DataProviderService } from '../../services/data-provider.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss'
})
export class RecipesComponent implements OnInit{

  private _records: IRecipe[] = [];
  records: IRecipe[] = [];
  searchTerm: string = '';

  constructor(private _dataService: DataProviderService) { }
  
  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this._dataService.getRecipes().subscribe(resp => {
      this._records = resp;
      this.records = resp;
    });
  }

  search() {
    this.records = this._records.filter(x => x.name.includes(this.searchTerm));
  }

}
