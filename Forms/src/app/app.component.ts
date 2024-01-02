import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Forms';
  @ViewChild('F')
  signupForm!: NgForm; 

  constructor(form : ElementRef){
  }

  genders = ['male' , 'female'];

  user = {
     username : '',
     email : '',
     secretQuestion : '',
     answer : '',
     gender : ''
  };

//  suggestUserName(){
//   this.signupForm.setValue({
//      UserData:{
//       username : 'Pranav',
//       email: ''
//      },
//      secret : 'pet',
//      questionAnswer: '',
//      gender: 'male'
//   });
// this.signupForm?.form.patchValue({   //setValue
//     userData: {
//       username : 'Pranav'
//     }
// });
//  }

  submitted = false;
  answer = "";
  defaultUsername = "Kpranav29";

  submitForm(){
    this.submitted = true;
     this.user.username = this.signupForm.value.userData.username;
     this.user.email = this.signupForm.value.userData.email;
     this.user.gender = this.signupForm.value.userData.gender;
     this.user.secretQuestion = this.signupForm.value.userData.secret;
     this.user.answer = this.signupForm.value.userData.questionAnswer;

     this.signupForm.reset();
     //console.log(this.signupForm);
  }

  // submitForm(form: NgForm){
  //   console.log(form);
  //  }

//  submitForm(form: any){
//   console.log(form);
//  }
}

// in form response if dirty : true then form has changed if you didnt fill form and submit dirty : false

// if you click field touch : true

// required email  sending empty email will lead to valid : false