import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { tap } from "rxjs/operators";

//intercept the request 

export class AuthInterceptorService implements HttpInterceptor{
    
    intercept(req: HttpRequest<any>, next: HttpHandler){
      console.log("Request is on the way !");
      console.log(req.url);
      const modifiedRequest = req.clone({headers: req.headers.append('Auth', 'xyz')});   //you can modify anything like headers, params, uls, etc..
      return next.handle(modifiedRequest);                                            // continue the request req or modified 
    }

    //inceptor only attached to off header and other used for logging 
}