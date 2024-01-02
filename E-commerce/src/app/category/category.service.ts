import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { Category } from "./category.model";
import { Observable } from "rxjs";


@Injectable()     
export class CategoryService{

    constructor(private http : HttpClient,
        private route: ActivatedRoute,
        private router: Router){       
    }
     
    fetchAll(): Observable<Category[]>{
        let url = environment.webApi+ "/api/Category/getCategory";
        return this.http.get<Category[]>(url);
    }

    submitFormData(formData: Category) {
        let url = environment.webApi+ "/api/Category/addCategory";
          return this.http.post(url, formData);
      }

      changeStatus(id: number) {
        let url = `${environment.webApi}/api/Category/deleteCategory/${id}`;
        return this.http.put(url, null);  
      }
      
      updateCategory(category : Category){
        let url = environment.webApi+ "/api/Category/updateCategory";
        return this.http.put(url, category);
      }
}