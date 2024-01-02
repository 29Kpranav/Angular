import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';

import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;
  recipe:Recipe;

  get recipeControls() {
    return (this.recipeForm.get('ingredients') as FormArray).controls
  }

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          //console.log(this.id);
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );   
      
      this.recipeForm = this.formBuilder.group({
        name: ['', Validators.required],
        imagePath: ['', Validators.required],
        description: ['', Validators.required],
        ingredients: this.formBuilder.array([])  
      });
  }

  onSubmit() {

    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.onCancel();
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let Available = null;
    let recipeIngredients = new FormArray([]);
  
    if (this.editMode) {
      this.recipeService.getRecipe(this.id).subscribe((result: Recipe) => {
        this.recipe = result;
  
        recipeName = this.recipe.name;
        recipeImagePath = this.recipe.imagePath;
        recipeDescription = this.recipe.description;
        Available = this.recipe.Available;
        if (this.recipe['ingredients']) {
          for (let ingredient of this.recipe.ingredients) {
            recipeIngredients.push(
              new FormGroup({
                id: new FormControl(ingredient.id),
                name: new FormControl(ingredient.name, Validators.required),
                recipeId: new FormControl(ingredient.recipeId),
                amount: new FormControl(ingredient.amount, [
                  Validators.required,
                  Validators.pattern(/^[1-9]+[0-9]*$/)
                ])
              })
            );
          }
        }
  
        // Initialize form here after values are fetched
        this.recipeForm = this.formBuilder.group({
          name: [recipeName, Validators.required],
          imagePath: [recipeImagePath, Validators.required],
          description: [recipeDescription, Validators.required],
          ingredients: recipeIngredients,
          Available: [Available]  
        });
      });
    } else {
      // Initialization for non-edit mode
      this.recipeForm = this.formBuilder.group({
        name: [recipeName, Validators.required],
        imagePath: [recipeImagePath, Validators.required],
        description: [recipeDescription, Validators.required],
        ingredients: recipeIngredients,
        Available: [Available]  
      });
    }
  }
  
}



//validators working at time of add new item but it is not working at time of update 
// bug 