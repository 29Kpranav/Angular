import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
    public id: number;
    public name: string;
    public description: string;
    public Available:boolean;
    public imagePath: string;
    public ingredients : Ingredient[];
  
    constructor(id:number, Available:boolean, name: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
      this.id = id;
      this.name = name;
      this.Available = Available;
      this.description = desc;
      this.imagePath = imagePath;
      this.ingredients = ingredients;
    }
  }

  export class RecipeMap{

    public recipes:Recipe[];

    //public recipesJsonString:string;
  }
  