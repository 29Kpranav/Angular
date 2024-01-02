import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-item',
  templateUrl: './admin-item.component.html'
})
export class AdminItemComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
  }

  @Input() recipe: Recipe;

  changeStatus(id : number){
    let url = environment.webApi + "/api/Home/deactivate/" + id;
        
    this.http.put(url, { responseType: 'text' }).subscribe();
  }
}
