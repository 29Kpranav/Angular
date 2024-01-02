import { Component, OnInit} from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { DataStorageService } from "src/app/shared/data-storage.service";
import { RecipeItemComponent } from "../recipe-list/recipe-item/recipe-item.component";

@Component({
    selector: 'app-recipe-Detail',
    templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
    id: number;
    recipe : Recipe;
     
    constructor(private recipeService : RecipeService,
                private dataStorageService: DataStorageService,
                private route: ActivatedRoute,
                private router: Router){
    }

    ngOnInit(): void {     
        this.route.params.subscribe(
            (params: Params)=>{
                this.id = +params['id']; 
                //this.recipe = this.recipeService.getRecipe(this.id); service
                this.dataStorageService.fetchRecipesById(this.id).subscribe((response: Recipe) => {
                    this.recipe = response;
                });
            }
        )
    }

    onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    }

    onEditPage(){
        this.router.navigate(['edit'], {relativeTo: this.route});
        // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
    }

    /** 
    The first line navigates directly to a child route named 'edit' without considering the current route's context.
    The second line uses relative navigation (../) to first move up one level in the route hierarchy and then appends the 
    id parameter followed by 'edit' to the new path.
    */

    onDeleteRecipe(){
        this.recipeService.deleteRecipe(this.id);
        this.router.navigate(['/recipes']);
    }
}