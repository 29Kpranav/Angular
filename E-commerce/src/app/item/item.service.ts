import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { Observable, map } from "rxjs";
import { Item } from "./item.model";
import { ApiResponse } from "../common-model/api-response";
import { Category } from "../category/category.model";
import { CategoryService } from "../category/category.service";


@Injectable()     
export class ItemService{

    constructor(private http : HttpClient, 
        private route: ActivatedRoute,
        private router: Router){       
    }
     
    fetchAll(): Observable<any>{
        let url = environment.webApi+ "/api/Item/getItem";
        return this.http.get(url);
    }

    submitFormData(formData: Item): Observable<string> {
        let url = environment.webApi+ "/api/Item/addItem";
          return this.http.post(url, formData, { responseType: 'text' });
      }

      changeStatus(id: number) {
        let url = `${environment.webApi}/api/Item/deleteItem/${id}`;
        return this.http.put(url, null);  
      }


      fetchAllC(): Observable<ApiResponse<Item[]>> {
        let url = environment.webApi + "/api/Category/getCategory";
        return this.http.get<ApiResponse<Item[]>>(url);
      }

      updateItem(item : Item){
        let url = environment.webApi+ "/api/Item/updateItem";
        return this.http.put(url, item);
      }
}