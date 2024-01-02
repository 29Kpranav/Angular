import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';

@Component({
  selector: 'app-un-known-component',
  templateUrl: './un-known-component.component.html',
  styleUrls: ['./un-known-component.component.css']
})
export class UnKnownComponentComponent implements OnInit {

  errorMessage !: string;

  constructor(private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.errorMessage = this.route.snapshot.data['message'];   // <!--passing static error essage with data property-->
    this.route.data.subscribe (
      (data : Data) => {
        this.errorMessage = data['message'];
      }
    )
  }

}
