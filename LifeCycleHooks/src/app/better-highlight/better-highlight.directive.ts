import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  
  @Input() defaultColor: string = 'transparent';   //it override by property binding in app.comp.html
  
  //@Input() highlightColor: string = 'blue';
  @Input('appBetterHighlight') highlightColor: string = 'blue'   //pass directive as alias

  ngOnInit(){
     //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');  //you can add flags here as fourth parameter
     this.backgroundColor = this.defaultColor;   //to put bydefault color
   }

   //Using HostBinding to bind host properties
   @HostBinding('style.backgroundColor')
  backgroundColor!: string;

  constructor(private elRef: ElementRef ,private renderer: Renderer2) {
  }

   // using host listner toto listen to host events
   @HostListener('mouseenter') mouseover(eventData: Event){     
   // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue'); 
   // this.backgroundColor = 'blue';
   this.backgroundColor = this.highlightColor;          //binding to directive properties
   }

   @HostListener('mouseleave') mouseleave(eventData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green'); 
    //this.backgroundColor = 'green';
    this.backgroundColor = this.defaultColor;          //binding to directive properties
   }
}
