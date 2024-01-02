import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { map, tap } from "rxjs/operators" 
//import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { environment } from "src/environments/environment";

@Injectable({providedIn : 'root'})
export class DataStorageService {

    constructor(private http: HttpClient, private recipeService: RecipeService){}

    storeRecipes(){

    let url = environment.webApi + "/api/Home/Insert";    
    const recipes = this.recipeService.getRecipes();
 
    let recipeMap={
      recipeMap:recipes
    }                          

      this.http.post(url, recipeMap, { responseType: 'text' }).subscribe((response: string) => {   
        console.log(response); 
      }, (error) => {
        console.error('Error occurred:', error);
      });
      
    }

    fetchRecipes(){
      
      let url = environment.webApi + "/api/Home/GetRecipe"; 
      
      return this.http.get(url)
    }

    fetchRecipesById(id:number){
      let url = environment.webApi+ "/api/home/getRecipeById/" + id;

      return this.http.get(url);
    }

    fetchAll(){
      let url = environment.webApi+ "/api/home/GetAll";

      return this.http.get(url);
    }
}