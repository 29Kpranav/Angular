import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent implements OnInit {

  mycolor:String="red";
  rating:number=2;

  myJson={
    color:'green',
    fontSize:"32px",
    'font-family':'Trebuchet MS'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
