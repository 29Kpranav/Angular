import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service'; 
// Use the correct relative path to your 'api.service.ts' file

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  responseData: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getSomeData().subscribe(
      (data) => {
        this.responseData = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
