import { Injectable } from '@angular/core';
import { Cocktail } from './models/cocktail.model';

@Injectable({
  providedIn: 'root'
})

export class CocktailService {

  constructor() { }

  cocktails: Cocktail[] = [
    new Cocktail (
     "Mojito", 5, "https://www.cocktailmag.fr/media/k2/items/cache/063ee9aeb9f60efa02823e51450f82ce_S.jpg"
    ),
    new Cocktail (
     "Piña Colada", 7, "https://www.cocktailmag.fr/media/k2/items/cache/63503204d18160dd6a733e989b70c404_S.jpg"
    ),
    new Cocktail (
    "Americano", 6, "https://www.cocktailmag.fr/media/k2/items/cache/aaa036e4cb16038f90e128d8e39c714f_S.jpg"
    ),
    new Cocktail (
    "Kir", 6.5, "https://www.cocktailmag.fr/media/k2/items/cache/5d9bd784bfd234610bf8ba15e7ad6a4e_S.jpg"
    ),
    new Cocktail (
    "Ti Punch", 4.5, "https://www.cocktailmag.fr/media/k2/items/cache/c66733db6fd9c6779ab24f57f69f5201_S.jpg"
    ),
    new Cocktail (
    "Bloody Mary", 5.5, "https://www.cocktailmag.fr/media/k2/items/cache/1c0ae2205709722b62e843abc0471a55_S.jpg"
    ),
    new Cocktail (
    "Sex on the Beach", 6, "https://www.cocktailmag.fr/media/k2/items/cache/7293a47c0f4cdddd46ff10bcf3d23287_S.jpg"
    ),
    new Cocktail (
      "Sangria", 5, "https://www.cocktailmag.fr/media/k2/items/cache/5fa21cd9e0d2531a2f1dfdffbab46f70_S.jpg"
    ),
  ]

  getCocktails() {
    return this.cocktails;
  }
}
