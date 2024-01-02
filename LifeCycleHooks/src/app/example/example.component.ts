import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],
  providers: [LoggingService]                            //Injecting the logging service into Componenets
})
export class ExampleComponent implements OnInit {

  constructor(private loggingService: LoggingService){   //Injecting the logging service into Componenets
    console.log('Constructor called!');
  }

  ngOnInit(): void {
  }

  onCreateNew(name: string){
     this.loggingService.LogStatusChange(name);   //no need to create instance like we use in app.component.html
  }
}
