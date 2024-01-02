import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  constructor(private _formBuilder: FormBuilder) {}

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  } 

  toppings = this._formBuilder.group({
    pepperoni: false,
    extracheese: false,
    mushroom: false,
  });

  title = 'MaterialAngular';

  
  
}
