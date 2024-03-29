import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

 

@Component({
  selector: 'app-shopping-edit',                    // app-root
  templateUrl: './shopping-edit.component.html',    // you can use -> template : '<app-server></app-server>' as well,  instead of '' we can use ``
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy{


onDelete() {
 this.onClear();
 this.slService.deleteIngredient(this.editedItemIndex);
}

  constructor(private slService : ShoppingListService){
  }

  @ViewChild('f') slForm: NgForm;
  editMode = false;
  subscription : Subscription;
  editedItemIndex: number;
  editedItem: Ingredient;

ngOnInit(): void {
    this.subscription = this.slService.startedEditing.subscribe(
      (index:number)=>{
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.slService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }  //allowing selection of items in list
    );
}
  ngOnDestroy(): void {
     this.subscription.unsubscribe();
  }
  
  onSubmit(form : NgForm){
    const value = form.value;
    const newIngredient = new Ingredient (0, value.name, 0, value.amount);
    if(this.editMode){
      this.slService.updateIngredient(this.editedItemIndex, newIngredient);
    }else{
      this.slService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();   
  }

  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }
}
