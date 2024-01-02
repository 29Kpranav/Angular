import { OnDestroy, Component, AfterContentChecked, AfterContentInit, DoCheck, OnChanges, OnInit, SimpleChange, SimpleChanges, AfterViewChecked, AfterViewInit } from '@angular/core';

import { LoggingService } from './logging.service'; //service
import { DataService } from './data.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy,AfterViewChecked, AfterViewInit, AfterContentInit, AfterContentChecked, OnInit, OnChanges, DoCheck{
  title = 'LifeCycleHooks';

  constructor(private dataService: DataService){    
    console.log('Constructor called!');
  }

  someFunction() {
    const service = new LoggingService();
    service.LogStatusChange('PK');
 }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit(){
    console.log('ngOnInit called!');
    this.data = this.dataService.getData();
  }

  result:number=0;
  onChangeFirst(num2:any){
    this.result=num2*num2;
  }

  result2:string="";
  onDestroy(string:string){
  this.result2=string.slice(1);
  }

  ngDoCheck(){
    console.log('ngDoCheck called!');  //when angular checks for any changes
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit(){
      console.log('ngAfterViewInit called!');
  }

  ngAfterViewChecked(){
      console.log('ngAfterViewChecked called!');
  }


  ngOnDestroy(){
    console.log("ngOnDestroy Called!");
  }

  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4, 6];
  onlyOdd = false;
  value = 9; 

  data: any[] = [];

  addItem() {
    const newItem = `Item ${this.data.length + 1}`;
    this.dataService.addData(newItem);
    //this.data.push(newItem);
  }

  message = '';

  sendMessage() {
    this.dataService.sendMessage(this.message);
    this.message = '';
  }
}
