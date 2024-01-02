import { Component, OnDestroy, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { DataStorageService } from "src/app/shared/data-storage.service";
 

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit, OnDestroy{
 
  recipes: Recipe[]=[];
  subscription: Subscription;
 
  constructor(private recipeService: RecipeService, private router : Router, private route : ActivatedRoute,private dataStorageService:DataStorageService) {
  }
    
  ngOnInit() {
    
  this.dataStorageService.fetchRecipes().subscribe((result:Recipe[])=>{
  this.recipes = result;
  });

  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();   //When subscribing to observables in Angular components, it's essential to unsubscribe from those subscriptions to prevent memory leaks when the component is destroyed. If you have declared a subscription in your RecipeListComponent and are attempting to unsubscribe in the ngOnDestroy method but that subscription is undefined or hasn't been properly initialized, you may encounter this error.
    }
  }
}



/*
 
 Deleting all Items in a FormArray
As of Angular 8+, there's a new way of clearing all items in a FormArray.
(<FormArray>this.recipeForm.get('ingredients')).clear();
The clear() method automatically loops through all registered FormControls (or FormGroups) in the FormArray and removes them.
It's like manually creating a loop and calling removeAt() for every item.

*/