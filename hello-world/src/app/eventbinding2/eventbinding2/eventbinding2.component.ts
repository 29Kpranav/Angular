import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding2',
  templateUrl: './eventbinding2.component.html',
  styleUrls: ['./eventbinding2.component.css']
})
export class Eventbinding2Component implements OnInit {

  result:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  onSend(myinput:any){
    console.log(myinput);
    console.log(myinput.value);
    myinput.style.background='green';
    myinput.style.color='white';
  }

  onSend1(myValue:any){
    console.log(myValue);
  }

  onAddition(num1:any, num2:any){

    let n1=+num1;
    let n2=+num2;

    this.result=n1+n2;
  }

  onChange(myname:any){
    console.log("Change event occur..");
    myname.style.background='red';
    myname.style.color='white';

  }

  showElement: boolean = true;

  toggleElement(): void {
    this.showElement = !this.showElement;
  }
}
