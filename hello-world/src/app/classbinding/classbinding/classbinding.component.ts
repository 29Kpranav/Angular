import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  templateUrl: './classbinding.component.html',
  styleUrls: ['./classbinding.component.css']
})
export class ClassbindingComponent implements OnInit {

  myclass:String='success';
  rating:number=2;
  iserror:boolean=false;
  isSpecial:boolean=true;

  myjson={
     'success':!this.iserror,
     'danger':this.iserror,
     'special':this.isSpecial
  }

  constructor() { }

  ngOnInit(): void {
  }

}
