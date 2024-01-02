import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: any[] = [];

  constructor(private log: LoggingService) {}     // injecting services into service

  logData(message: string) {   // put message from data service to logging service
    this.log.logger(message);
  }

  getData(): any[] {
    // Simulated data fetching
    return this.data;
  }

  addData(item: any): void {
    // Simulated data addition
    this.data.push(item);
  }

  private messageSource = new Subject<string>();
  message$ = this.messageSource.asObservable();

  sendMessage(message: string) {
    this.messageSource.next(message);
  }
}
