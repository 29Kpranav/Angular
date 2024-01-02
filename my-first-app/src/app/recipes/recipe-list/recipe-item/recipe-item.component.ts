import { Component, Input, OnInit } from "@angular/core";
import { Recipe } from "../../recipe.model";

@Component({
    selector: 'app-recipe-Item',
    templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent implements OnInit {

    @Input() recipe: Recipe;
    @Input() index: number;

    ngOnInit(){   
    }

    constructor(){}

    
}