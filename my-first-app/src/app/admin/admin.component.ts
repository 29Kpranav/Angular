import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { DataStorageService } from '../shared/data-storage.service';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService) { }

  AdminRecipes: Recipe[]=[];

  ngOnInit(): void {
    this.dataStorageService.fetchAll().subscribe((result:Recipe[])=>{
      this.AdminRecipes = result;
      });
  }
}
