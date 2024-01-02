import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, CanComponentDeactivate {
  user !: { id: number; name: string; } ;
  paramSubscription!: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    this.route.params.subscribe(       // Subscribe is an method of observable it is used when
      (params: Params) => {

        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
  }

  users = [
    {
      id: 1,
      name:'Max'
    },
    {
      id:2,
      name:'Anna'
    },
    {
      id:3,
      name:'Chris'
    }
  ];

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {

    /*
    if((this.serverName != this.server.name || this.serverStatus !== this.server.status) &&
    !this.changedSaved){
      return confirm('Do you want to discard the changes?');
    }else {
      return true;
    }
    */
       
    return true;
     }
  }


// The subscribe method allows you to listen to and react to these changes. When you subscribe to an Observable, you can define 
//what should happen when new data arrives, an error occurs, or when the Observable completes.