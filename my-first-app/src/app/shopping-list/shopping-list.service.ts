import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService{

  ingredientsChanged = new Subject<Ingredient[]>();   //changed emit to subject
  startedEditing = new Subject<number>();

   private ingredients: Ingredient[] = [
        new Ingredient(0, 'Apples', 0, 5),
        new Ingredient(0, 'Tomatoes', 0, 10),
      ];

      getIngredients(){
        return this.ingredients.slice();
      }

      getIngredient(index: number){
        return this.ingredients[index];
      }

      addIngredient(ingredient: Ingredient){
         this.ingredients.push(ingredient);
         this.ingredientsChanged.next(this.ingredients.slice());
      }

      addIngredients(ingredients : Ingredient[]){
        //  for(let ingredient of ingredients){      //1st way
        //   this.addIngredient(ingredient);
        //  }

        //2nd way is to add all ingredient and push once
        
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
      }

      updateIngredient(index: number, newIngredient: Ingredient ){
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
      }

      deleteIngredient(Index: number){
        this.ingredients.splice(Index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
      }
}

/* 
By emitting this event with the updated array (this.ingredients.slice() creates a copy of the array to prevent direct access to 
the original array), you allow other components or services that are subscribed to the ingredientsChanged event to react to the 
changes and perform actions accordingly, such as updating their own views or data based on the new ingredients array.
*/