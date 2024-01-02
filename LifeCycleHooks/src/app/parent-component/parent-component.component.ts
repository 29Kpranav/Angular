import { Component, ViewChild, ContentChild, AfterViewInit, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ChildComponent } from './child-component/child-component.component';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-parent',
  template: `
    <h1>Parent Component</h1>
    <app-child>
      <p #projectedContent>Projected Content from Parent</p>
    </app-child>
  `
})
export class ParentComponent implements AfterViewInit, OnDestroy {

  @ViewChild(ChildComponent) childComponent!: ChildComponent;
  
  @ContentChild('projectedContent') projectedContent!: ElementRef;

  ngAfterViewInit() {
    if (this.childComponent) {
      console.log('Child Component ElementRef:', this.childComponent.elementRef.nativeElement.innerText);
    }
    if (this.projectedContent) {
      console.log('Projected Content in Child Component:', this.projectedContent.nativeElement.innerText);
    }
  }

  receivedMessage = '';
  private subscription!: Subscription;

  constructor(private dataService: DataService) {
    this.subscription = this.dataService.message$.subscribe((message: string) => {
      this.receivedMessage = message;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
