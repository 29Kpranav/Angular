
import { ElementRef, HostBinding, HostListener } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
   selector: '[appDropdown]'
})
export class DropdownDirective{
    @HostBinding('class.open') isOpen = false;

    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
      }
      constructor(private elRef: ElementRef) {}       //close dropdown from anywhere
      
    // @HostListener('click') toggleOpen(){
    //   this.isOpen =!this.isOpen;
    // }    //close dropdown
}