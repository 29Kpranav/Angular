import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div class="child">
      <h2>Child Component</h2>
      <ng-content></ng-content>
      <div #childElementRef>Element from Child Component</div>
    </div>
  `,
  styles: [`
    .child {
      border: 1px solid #ccc;
      padding: 10px;
    }
  `]
})
export class ChildComponent {
  // ElementRef to access child element within the child component
  constructor(public elementRef: ElementRef) {}
}
