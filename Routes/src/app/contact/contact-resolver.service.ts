import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataResolver implements Resolve<any> {
  //constructor(private dataService: DataService) {}  ---data service is nessesary

//   resolve(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<any> | Promise<any> | any {
//     return this.dataService.getData(); // Fetch data from your service
//   }

resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
}

}
