import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { PostsService } from './posts.service';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  private errorSub : Subscription;
  
  constructor(private http: HttpClient, private postService: PostsService) {}

  ngOnInit() {
   this.errorSub = this.postService.error.subscribe(errorMessage =>{
    this.error = errorMessage;
  });

    this.isFetching = true;
    this.postService.fetchPosts().subscribe(posts =>{
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error=>{
      this.error = error.message;
    });
  }


  onGet(){
    this.postService.onGet().subscribe((responseData)=>{
      console.log(responseData);
      });
  }

  onCreatePost(postData: Post) {     
    this.postService.createAndStoredPost(postData.name, postData.salary, postData.age);
  }

  onFetchPosts() {
     
    this.isFetching = true;
    this.postService.fetchPosts().subscribe(posts =>{
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error=>{
      this.error = error.message;
      console.log(error);
    });
  }

  onClearPosts() {
    this.postService.deletePosts().subscribe((response: any)=>{
    //console.log(response);
    this.loadedPosts = [];
    });
     
  }

  onHandleError(){
    this.error = null;
  }

  ngOnDestroy(): void {
      this.errorSub.unsubscribe();
  }
}

/*
In Angular, when you make HTTP requests using services like HttpClient, these requests are often asynchronous. Until you subscribe to 
an Observable returned by the HTTP request, the request won't be executed.

This happens because in Angular's HTTP services, the requests are lazy by default. The request isn't made until someone subscribes to
the Observable. This behavior allows you to set up the request, configure it with headers, body, etc., and then decide when to 
trigger the request by subscribing to the Observable.

This pattern helps in managing and controlling the request lifecycle effectively. It also allows you to perform additional operations 
on the response or handle errors before the request is made. Subscribing to the Observable triggers the HTTP request and begins the
process of sending it to the server.

*/