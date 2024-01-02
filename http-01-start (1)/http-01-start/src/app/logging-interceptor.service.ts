import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { tap } from "rxjs/operators";

//multiple interceptors 

export class LoggingInterceptorService implements HttpInterceptor{
    
    intercept(req: HttpRequest<any>, next : HttpHandler){
        
        console.log('Ongoing request');
        console.log(req.headers);
        console.log(req.url);
        return next.handle(req).pipe(tap(event =>{
            if(event.type === HttpEventType.Response){
                console.log('Incoming response');
                console.log(event.body);
            }
        }));
    }
}