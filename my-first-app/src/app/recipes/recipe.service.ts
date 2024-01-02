import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";
import { DataStorageService } from "../shared/data-storage.service";

@Injectable()      //if you need to inject service into service you gotta use Injectable()
export class RecipeService{

    constructor(private SlService : ShoppingListService, private http: HttpClient,
                private route: ActivatedRoute,
                private router: Router){
    }

    recipesChanged = new Subject<Recipe[]>();
  
    private recipes: Recipe[] = [];
    private oneRecipe : Recipe;

      setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(recipes);
      }   

      getRecipes(){
        return this.recipes.slice();   //slice() without any arguments creates a copy of the entire array.
      }

      addIngredientsToShoppingList(ingredients : Ingredient[]){
         this.SlService.addIngredients(ingredients);
      }

      getRecipe(id: number) {
        let url = environment.webApi + "/api/Home/getRecipeById/" + id; 
         return this.http.get(url);
      }
      
      
      addRecipe(recipe: Recipe) {
         
        let url = environment.webApi + "/api/Home/InsertRecipe";   
        this.http.post(url, recipe, { responseType: 'text' }).subscribe((response: string) => {   
        console.log(response);   
        }, (error) => {
        console.error('Error occurred:', error);
        });  
      }
    
      updateRecipe(id: number, newRecipe: Recipe) {
        newRecipe.id = id; 
        newRecipe.Available = true;
       // console.log(newRecipe);
        let url = environment.webApi + "/api/Home/update";   
        this.http.put(url, newRecipe, { responseType: 'text' }).subscribe((response: string) => {   
        console.log(response);   
        }, (error) => {
        console.error('Error occurred:', error);
        }); 

      }
    
      deleteRecipe(id: number) {
        let url = environment.webApi + "/api/Home/deactivate/" + id;
        
        this.http.put(url, { responseType: 'text' }).subscribe(
          (response: string) => {
            if (response.trim() === 'Status Changed') {
              console.log('Recipe status changed successfully');
            } else {
              console.log('Unexpected response:', response);
            }
          },
          (error) => {
            console.error('Error occurred:', error);
          }
        );
      }   
}

/*
I changed the igChangeSub property to just subscription. So if you see that name change in code in future videos, that's why.
 Other than that, nothing changed!
*/

/*
this.recipesChanged.next(this.recipes.slice());: After removing the recipe from the recipes array, this line emits a
notification using an RxJS Subject named recipesChanged. It sends the updated list of recipes by calling next() on the 
subject with the sliced copy of the recipes array.

this.recipesChanged seems to be an instance of an RxJS Subject or BehaviorSubject. By calling next() on it, you're pushing a new 
value (in this case, the updated recipes array) to any subscribed observers. This mechanism can be used to notify other parts of 
the application that the recipes array has been updated or changed.
*/

/*
 // private recipes: Recipe[] = [
    //   new Recipe(
    //     0,
    //     'Tasty Schnitzel',
    //     'A super-tasty Schnitzel - just awesome!',
    //     'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
    //     [
    //       new Ingredient(0,'Meat', 0, 1),
    //       new Ingredient(0, 'French Fries', 0, 20)
    //     ]),
    //   new Recipe(
    //     0,
    //     'Big Fat Burger',
    //     'What else you need to say?',
    //     'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
    //     [
    //       new Ingredient(0, 'Buns', 0, 2),
    //       new Ingredient(0, 'Meat', 0, 1)
    //     ])
    // ];
*/