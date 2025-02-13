import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRecipe } from '../interfaces/recipe.interface';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  constructor(private _http: HttpClient) { }

  getRecipes(): Observable<IRecipe[]> {
    return this._http.get<IRecipe[]>('assets/data.json');
  }  
}
