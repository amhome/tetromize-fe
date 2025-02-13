import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../../interfaces/recipe.interface';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrl: './bookmarks.component.scss'
})
export class BookmarksComponent implements OnInit {

  records: IRecipe[] = [];

  constructor(private _storageService: StorageService) { }
  
  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.records = this._storageService.getRecipes();
  }

  remove(item: IRecipe) {
    this._storageService.removeRecipe(item);
    this.records.splice(this.records.indexOf(item), 1);
  }
}
