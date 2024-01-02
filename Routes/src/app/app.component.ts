import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { UserService } from './user.service';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private router: Router, private route: ActivatedRoute, private userService : UserService){
  }

 getUrl(id: number) {
 this.router.navigate(['/contact', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment: 'Loading'});

 console.log(this.route.snapshot.queryParams);
  console.log(this.route.snapshot.fragment);
 }
  title = 'Routes';

  onClick(){
     this.userService.activatedEmitter.next(true);
  }
  
  userActivated = false;
  private activatedSub !: Subscription;
  ngOnInit(){
    this.activatedSub = this.userService.activatedEmitter.subscribe(didActivated =>{
        this.userActivated = didActivated;
    });
  }

  ngOnDestroy(): void {
      this.activatedSub.unsubscribe();
  }
}


/*
dont use event emmiter use subject
cant use subject at @output


Use Observables when:

One-way data flow: If you have a stream of data that needs to be consumed by one or more components without needing direct interaction or control, Observables are suitable.
Passive data source: When you have a data source that emits values only when requested by a subscription, and there's no need for direct manipulation or multicasting.

Use Subjects when:

Two-way communication: Subjects are helpful when you need a communication channel for bidirectional data flow between different parts of your application.
Event aggregation: If you have multiple sources emitting events and you need a centralized mechanism to aggregate and manage these events, Subjects can be valuable.
Broadcasting to multiple subscribers: When you want to multicast data to multiple subscribers concurrently, a Subject is a suitable choice.

Consider Subjects in these scenarios:

Event handling: Subjects are effective for handling events where multiple subscribers need to react to the same event.
Data sharing: When you require a shared data source between components, especially when multiple components need to both read from and write to the data source.
Managing application state: For state management within an application where multiple parts of the app need access to the same state.

Consider Observables for these scenarios:

Asynchronous data streams: Observables are ideal for handling asynchronous data streams like HTTP requests, timers, and other asynchronous operations.
Unidirectional data flow: When a single stream of data is emitted by a source and consumed by one or more components in a unidirectional manner.
Handling API responses: Use Observables to manage responses from APIs, databases, or other external data sources.
*/ 