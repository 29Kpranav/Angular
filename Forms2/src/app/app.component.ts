import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   
  title = 'Forms2';

  SignUpForm!: FormGroup;

  ngOnInit(){
   this.SignUpForm = new FormGroup({   //controls refer to input value  
   'UserData': new FormGroup({      //nested
    'username' : new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
    'email' : new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails.bind(this)),
   }),
    'gender' : new FormControl('male'),
    'hobbies' : new FormArray([])
   });

  //  this.SignUpForm.valueChanges.subscribe((value) => {
  //   console.log('Value changed:', value);
  // });     //reacting to value changed

  //  this.SignUpForm.statusChanges.subscribe((status) =>{
  //    console.log('Status Changed: ', status); 
  //  });       //reacting to status changed

  // this.SignUpForm.setValue({
  //    'UserData': {
  //      'username': 'Max',
  //      'email': 'max@gmail.com',
  //    },
  //    'gender' : 'Male',
  //    'hobbies' : []
  // });     
  
  //setValue
  // you can use patchValue as well 
  // if you patch username other values stays as it is
  }

  genders = ['Male', 'Female'];
  forbiddenUserNames = ['ana', 'chris'];
  
  onAddHobby(){
    const control = new FormControl(null, Validators.required);    //form array is array of controls 
    (<FormArray>this.SignUpForm.get('hobbies')).push(control);
  }

  onSubmit(){
    console.log(this.SignUpForm);
  }

  getcontrols() {
    return (this.SignUpForm.get('hobbies') as FormArray).controls;
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } | null {
    if (this.forbiddenUserNames.includes(control.value)) {
      return { "nameIsForbidden": true };      //custom validator
    }
    return null;   //we should not use false here
  }
  
  forbiddenEmails(control: AbstractControl): Promise<any> | Observable<any> {   //abstractControl
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ 'emailIsForbidden': true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
  }
  
}


/*
In Angular, FormGroup is a class provided by the @angular/forms module that represents a collection of form controls.
It acts as a container for form controls, allowing you to group multiple form controls together.

Key points about FormGroup:

Grouping Form Controls: It allows you to logically group related form controls together. For instance, you might group the 
controls for user details (like name, email, age) under one FormGroup.

Nested Groups: FormGroup instances can be nested within each other. This nesting helps in structuring complex forms with 
subsections or subgroups of form controls.

Validation: It provides a way to apply validation rules at the group level. Validators can be applied to the FormGroup as a whole
or to individual form controls within the group.
*/ 