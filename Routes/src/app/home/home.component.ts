import { Component, OnDestroy, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Observable, Subscription, filter, interval, map, observable } from 'rxjs';
import { count, error } from 'console';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private authService: AuthService) { }

  private firstobcSubcribe !: Subscription;

  ngOnInit(): void { 

    // this.firstobcSubcribe = interval(1000).subscribe(count =>{             //observable
    //   console.log(count);
    // }); 
    
  const customIntervalObservable = new Observable(observer => {   //observer tell observer about new data, error, observable completed
    let count = 0;
    setInterval(() => {
      observer.next(count);    //each time you call observer.next(value), you're sending a new value down the stream to be received by any subscribers to that Observable.
      if(count == 2){
        observer.complete();   //
      }
      if(count > 3){
        observer.error(new Error('Count is greater than 3'));   //to generate error
      }
      count++;
      }, 1000);
    });

    // pipe is use to add one or more operators 
    // The map operator is used to transform each emitted number + 1.

    /*
The key functionality of map can be summarized as follows:
Transformation: It transforms each value emitted by the Observable by applying a function to it.
One-to-One Mapping: It operates on each item individually, maintaining a one-to-one mapping between the input and output items.
    */ 
  

/*
filter does:
Selective Emission: It filters out items emitted by an Observable, emitting only those items that satisfy a specific condition defined by the provided predicate function.
Predicate Function: The filter operator takes a predicate function that evaluates each emitted item. If the predicate function returns true for an item, that item will be included in the output Observable. If it returns false, the item will be excluded.
*/ 
    this.firstobcSubcribe = customIntervalObservable.pipe(filter((data:any) => {
      return data > -1;
    }), map((data:any) => 'Round:'+ (data + 1))).subscribe(data => {  //subscribe - start receiving values emitted by that Observable.
       console.log(data);
    }, error => {
      console.log(error);       // to handle error
      alert(error.message);     //error cancle observable it does not complete it so if you add count == 5 and error gets at 4 it will cancle observable
    }, ()=>{
      console.log('Completed !');
    });
    

    
  }

  ngOnDestroy(): void {
    this.firstobcSubcribe.unsubscribe();
  }

  onLoadServers(){
     this.router.navigate(['contact']);
  }

  onLogIn(){
    this.authService.login();
  }

  onLogOff(){
    this.authService.logout();
  }

}

/*
 Observables are a core part of the RxJS library. An Observable represents a stream of data that can be observed
  over time. It allows you to work with asynchronous data, events, and multiple values that may arrive asynchronously.
*/
