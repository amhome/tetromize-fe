import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../../interfaces/recipe.interface';
import { DataProviderService } from '../../services/data-provider.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss'
})
export class RecipesComponent implements OnInit{

  private _records: IRecipe[] = [];
  records: IRecipe[] = [];
  searchTerm: string = '';

  constructor(private _dataService: DataProviderService, private _storageService: StorageService) { }
  
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


  save(item: IRecipe) {
    this._storageService.addRecipe(item);
  }

}
