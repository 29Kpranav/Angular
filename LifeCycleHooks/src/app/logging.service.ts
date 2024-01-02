import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // This makes the service available throughout the app
})

export class LoggingService{
    static LogStatusChange: any;

    LogStatusChange(status: string){
       console.log("A server status changed:"+ status);
    }

    logger(message: string) {
      console.log(`Logging message: ${message}`);
    }
}