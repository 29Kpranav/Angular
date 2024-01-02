import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

 errorMessage !: string;

  constructor(private router : Router, private route : ActivatedRoute) {}

  ngOnInit(): void {
  }

  onActvedRoute(){
    this.router.navigate(['home'], {relativeTo : this.route});
  }

  /*
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => {
      console.log(data.resolvedData); // Access resolved data here
    });
  }   data resolver
  */

}

/*
The use of resolvers -

Preloading Data
Improved User Experience
Handling Asynchronous Operations
Route Protection
Easier Debugging
*/ 