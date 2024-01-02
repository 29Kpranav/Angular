import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appBasicHighlight]' //wrap in [] beacsue to have attribute style
})
export class BasicHighlightDirective implements OnInit{

  constructor(private elementRef : ElementRef){
  }   

  ngOnInit(){
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }

}
//ng g d better-highlight 
//we created custom directive but accessing dom directly is not good practice 
//using renderer to build a better attribute directive
