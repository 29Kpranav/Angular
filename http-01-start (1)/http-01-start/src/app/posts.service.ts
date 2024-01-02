import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Post } from "./post.model";
import { environment } from "src/environments/environment";
import { catchError, map, tap } from "rxjs/operators";
import { Subject, throwError } from "rxjs";


@Injectable({providedIn : 'root'})   //you can put this in providers instead of here
export class PostsService implements OnInit{

    ngOnInit(): void {
     
    }

    constructor(private http: HttpClient){
    }

    error = new Subject<string>();

    createAndStoredPost(name: string, salary:string, age:string){
       
       const postData: Post = {
           name: name, salary: salary, age: age,
           id: 0
       };  
       let url=environment.webApi+'/api/employee/insertEmployee';
       this.http.post(url, postData, { responseType: 'text' }).subscribe((responseData)=>{  
        
       //request can only sent when you subscribe here i give resonse type text if not given it will consider json which will give error
       
       console.log(responseData);
       },  error =>{
        this.error.next(error.message);
      });

    };

    
    fetchPosts(){
      let url=environment.webApi+'/api/employee/getAllEmployees';
    //this.isFetching = true;   
    let searchParam = new HttpParams();
    searchParam = searchParam.append('print', 'pretty');
    searchParam = searchParam.append('custom', 'key');                                                //using rxjs operators to transform response data , map operator allows us to geet some data and return new data re wrapped
    return this.http
    .get<{ [key: string]: Post}>
    (url, { headers: new HttpHeaders({ 'Custom-Header': 'Hello'}),    //setting headers 
              params:  searchParam            //adding custm parameters
    })
    .pipe(map( responseData => {                                                // pipe is method use funnel your observable data through multiple operators before subscribe method
      const postsArray: Post[] = [];
      for(const key in responseData){
        if(responseData.hasOwnProperty(key)){
       postsArray.push({ id: key, ...responseData[key] })                       // brad operator pull out all key value pairs
      }
    }
    return postsArray;
    }), catchError(errorRes =>{
      //send to analytics server
      return throwError(errorRes);
    })
    )
     
    };

    deletePosts(){
      let url=environment.webApi+'/api/employee/deleteEmployee'; 
      return this.http
       .delete(url, {
         observe : 'events',      //'body' //'response'
         responseType : 'text'
        })
        .pipe(
          tap (event => {
           console.log(event);
           if(event.type === HttpEventType.Sent){     //observing differnt types of response
             //..
           }
           if(event.type === HttpEventType.Response){
           console.log(event.body);
           }
       })
        );

      // { responseType: 'text' }
    }

    onGet(){
      let url=environment.webApi+'/api/employee/getAllEmployees';
      return this.http.get(url);
    }
}