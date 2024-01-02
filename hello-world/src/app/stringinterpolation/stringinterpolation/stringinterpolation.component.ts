import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stringinterpolation',
  templateUrl: './stringinterpolation.component.html',
  styleUrls: ['./stringinterpolation.component.css']
})
export class StringinterpolationComponent implements OnInit {

  name:String='Pranav K';
  num:number=9;
  imgUrl:String='';
  constructor() { }

  ngOnInit(): void {
  }

}
